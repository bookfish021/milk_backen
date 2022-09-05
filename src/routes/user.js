import express from 'express';
import controller from '../controller';
import authentication from '../middlewares/authentication';
import admin from '../middlewares/admin';

const userRouter = express.Router();

userRouter.post('/register', controller.user.register);
userRouter.post('/get', authentication(), controller.user.get);
userRouter.post('/list', [authentication(), admin], controller.user.list);
userRouter.put('/update', authentication(), controller.user.updatePassword);
userRouter.put('/set', [authentication(), admin], controller.user.setPassword);

export default userRouter;
