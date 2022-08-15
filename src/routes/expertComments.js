import express from 'express';
import controller from '../controller';
import authentication from '../middlewares/authentication';
import expertMiddleware from '../middlewares/expert';

const expertCommentsRouter = express.Router();

expertCommentsRouter.post('/create', [authentication(), expertMiddleware], controller.expertComments.create);
expertCommentsRouter.post('/list', controller.expertComments.list);
expertCommentsRouter.put('/update', [authentication(), expertMiddleware], controller.expertComments.update);

export default expertCommentsRouter;
