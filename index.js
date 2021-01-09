const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');

const { auth } = require('./middleware/auth');
const { User } = require('./models/User');

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

//application/json
const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false  
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

console.log('test2');

app.get('/', (req, res) => {
    res.send('Hello World!!!!!!!!!!!!!!!');
})

app.post('/api/user/register', (req, res) => {
    //회원가입 정보
    const user = new User(req.body);

    user.save((err, userInfo) => {
        if(err) {
            return res.json({ 
                success: false, err
            });
        }

        return res.status(200).json({
            success: true
        });
    });
})

app.post('/api/user/login', (req, res) => {
    //요청된 이메일 DB 조회
    User.findOne({email: req.body.email}, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            });
        }

        //비밀번호 확인
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch) {
                return res.json({ 
                    loginSuccess : false, 
                    message: "비밀번호가 틀렸습니다."
                });
            }

            //비밀번호 확인되면 토큰생성
            user.generateToken((err, user) => {
                if(err) {
                    return res.status(400).send(err);
                }

                //토큰저장
                res.cookie("x_auth", user.token)
                .status(200)
                .json({
                    loginSucess: true,
                    userId: user._id
                    });
            });
        });
    });
})

app.get('/api/user/auth', auth, (req, res) => {
    //auth true
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    });
})

app.get('/api/user/logout', auth, (req, res) => {
    const filter = {_id: req.user._id};
    const updateData = {token: ""};

    User.findOneAndUpdate(filter, updateData, (err, usr) => {
        if(err) {
            return res.json({
                success: false, err
            });
        }

        return res.status(200).send({
            success: true
        });
    });
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});