import express from 'express';
import controller from '../controller';
import authentication from '../middlewares/authentication';
import admin from '../middlewares/admin';

const verificationCodeRouter = express.Router();

verificationCodeRouter.post('/create', [authentication(), admin], controller.verificationCode.create);
verificationCodeRouter.post('/list', [authentication(), admin], controller.verificationCode.list);
verificationCodeRouter.put('/update', [authentication(), admin], controller.verificationCode.update);
verificationCodeRouter.delete('/delete', [authentication(), admin], controller.verificationCode.delete);

export default verificationCodeRouter;
