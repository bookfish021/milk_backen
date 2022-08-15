import express from 'express';
import controller from '../controller';
import authentication from '../middlewares/authentication';
import expertMiddleware from '../middlewares/expert';
import adminMiddleware from '../middlewares/admin';

const expertCommentsRouter = express.Router();

expertCommentsRouter.post('/create', [authentication(), expertMiddleware], controller.expertComments.create);
expertCommentsRouter.post('/list', [authentication(), expertMiddleware], controller.expertComments.list);
expertCommentsRouter.post('/adminList', [authentication(), adminMiddleware], controller.expertComments.adminList);
expertCommentsRouter.put('/update', [authentication(), expertMiddleware], controller.expertComments.update);

export default expertCommentsRouter;
