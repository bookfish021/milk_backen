import express from 'express';
import userRouter from './user';
import sessionRouter from './session';
import expertCommentsRouter from './expertComments';
import normalCommentsRouter from './normalComments';

const router = express.Router();

router.use('/user', userRouter);
router.use('/session', sessionRouter);
router.use('/expertComments', expertCommentsRouter);
router.use('/normalComments', normalCommentsRouter);

export default router;
