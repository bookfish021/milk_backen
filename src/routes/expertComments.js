import express from 'express';
import controller from '../controller';

const expertCommentsRouter = express.Router();

expertCommentsRouter.post('/create', controller.expertComments.create);
expertCommentsRouter.post('/list', controller.expertComments.list);
expertCommentsRouter.put('/update', controller.expertComments.update);

export default expertCommentsRouter;
