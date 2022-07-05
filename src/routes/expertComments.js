import express from 'express';
import controller from '../controller';
import authentication from '../middlewares/authentication';

const expertCommentsRouter = express.Router();

expertCommentsRouter.post('/create', authentication(), controller.expertComments.create);
expertCommentsRouter.post('/list', authentication(), controller.expertComments.list);
expertCommentsRouter.put('/update', authentication(), controller.expertComments.update);

export default expertCommentsRouter;
