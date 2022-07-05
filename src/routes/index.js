import express from 'express';
import userRouter from './user';
import sessionRouter from './session';
import expertCommentsRouter from './expertComments';

const router = express.Router();

router.use('/user', userRouter);
router.use('/session', sessionRouter);
router.use('/expertComments', expertCommentsRouter);

export default router;
