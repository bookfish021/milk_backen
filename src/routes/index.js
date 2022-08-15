import express from 'express';
import userRouter from './user';
import sessionRouter from './session';
import expertCommentsRouter from './expertComments';
import normalCommentsRouter from './normalComments';
import verificationCodeRouter from './verificationCode';

const router = express.Router();

router.use('/user', userRouter);
router.use('/session', sessionRouter);
router.use('/expertComments', expertCommentsRouter);
router.use('/normalComments', normalCommentsRouter);
router.use('/verificationCode', verificationCodeRouter);

export default router;
