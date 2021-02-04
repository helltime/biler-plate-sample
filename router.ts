import { Router, NextFunction, Request, Response } from 'express';
import { Main } from '../controllers/main';
import { Test } from '../controllers/test';
import { bcc_test } from '../controllers/bcc_test';
import { cu_test } from '../controllers/cu_test';
// eslint-disable-next-line new-cap
const router = Router();

router.all('/*', (req: Request, res: Response, next: NextFunction) => {
    if (!(req.header('node-test-header') === 'nodeTest')) {
        console.log(`[${req.ip}] ${req.url} `);
    }
    next();
});
router.get('/', Main);
router.get('/test', Test);
router.get('/bcc_test', bcc_test);
router.get('/cu_test', cu_test);

export default router;
