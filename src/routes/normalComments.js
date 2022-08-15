import express from 'express';
import controller from '../controller';
import authentication from '../middlewares/authentication';
import admin from '../middlewares/admin';

const normalCommentsRouter = express.Router();

normalCommentsRouter.post('/create', authentication(), controller.normalComments.create);
normalCommentsRouter.post('/list', authentication(), controller.normalComments.list);
normalCommentsRouter.post('/adminList', [authentication(), admin], controller.normalComments.adminList);
normalCommentsRouter.put('/update', authentication(), controller.normalComments.update);

export default normalCommentsRouter;
