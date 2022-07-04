import express from 'express';
import controller from '../controller';
import authentication from '../middlewares/authentication';

const userRouter = express.Router();

userRouter.post('/register', controller.user.register);
userRouter.post('/list', controller.user.list);
userRouter.put('/update', authentication(), controller.user.updatePassword);

export default userRouter;
