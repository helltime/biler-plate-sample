import { Request, Response } from 'express';
import { BackCurriculumCommentSchema } from '../db/schema/back_curriculum_comment.schema';
/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} _next
 */
export async function bcc_test(req: Request, res: Response): Promise<void> {
    //const email = req.query['email'] ?? `test${Math.random()}`;
    //const password = req.query['password'] ?? 'test';
    //const nickname = req.query['nickname'] ?? 'nickname';

    BackCurriculumCommentSchema.remove({ });

    new BackCurriculumCommentSchema({ COMMENT: 'test1', REG_USER_ID: 0, BC_ID: 0}).save(async (err, test) => {
        if (err) {
            console.log(err);
        } else {
            BackCurriculumCommentSchema.findById({ _id: test._id }, (err, obj) => {
                console.log('createObj >> ' + JSON.stringify(obj));
            }); 
        }   

        await BackCurriculumCommentSchema.findByIdAndUpdate({ _id: test._id}, { COMMENT: 'test2'});

        await BackCurriculumCommentSchema.findById({ _id: test._id }, (err, obj) => {
            if(err) { 
                console.log(err);
            } else {
                console.log('after update >> ' + JSON.stringify(obj));    
            } 
        }); 
        
        await BackCurriculumCommentSchema.findByIdAndRemove({ _id: test._id});
    
        await BackCurriculumCommentSchema.findById({ _id: test._id }, (err, obj) => {
            if(err) { 
                console.log(err);
            } else {
                console.log('after remove >> ' + JSON.stringify(obj));    
            } 
        });
    });

 
}


