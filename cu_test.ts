import { Request, Response } from 'express';
import { FileUploadSchema } from '../db/schema/file.upload';
/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} _next
 */
export async function cu_test(req: Request, res: Response): Promise<void> {
    //const email = req.query['email'] ?? `test${Math.random()}`;
    //const password = req.query['password'] ?? 'test';
    //const nickname = req.query['nickname'] ?? 'nickname';

    FileUploadSchema.remove({ });

    new FileUploadSchema({ CUS_ID: "BCC1"
                         , FILE_NAME: 'test1.jyp'
                         , FILE_PATH: '/fileUpload/BC/C'
                         , FILE_NAME_UUID: 'test1abdefg-efffaa-aaazz-ggggg.jyp'
                         , REG_USER_ID: 0 }).save(async (err, test) => {
        if (err) {
            console.log(err);
        } else {
            FileUploadSchema.findById({ _id: test._id }, (err, obj) => {
                console.log('createObj >> ' + JSON.stringify(obj));
            }); 
        }   
        
        await FileUploadSchema.findByIdAndUpdate({ _id: test._id}, { FILE_NAME: 'test2.jyp'});

        await FileUploadSchema.findById({ _id: test._id }, (err, obj) => {
            if(err) { 
                console.log(err);
            } else {
                console.log('after update >> ' + JSON.stringify(obj));    
            } 
        }); 
        
        await FileUploadSchema.findByIdAndRemove({ _id: test._id});
    
        await FileUploadSchema.findById({ _id: test._id }, (err, obj) => {
            if(err) { 
                console.log(err);
            } else {
                console.log('after remove >> ' + JSON.stringify(obj));    
            } 
        });
    });

 
}


