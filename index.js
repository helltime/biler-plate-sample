const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')

console.log('test');

mongoose.connect('mongodb+srv://mongodb_user:vyhfACWSDj1gTOuE@cluster0.bpwbn.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false  
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

console.log('test2');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})