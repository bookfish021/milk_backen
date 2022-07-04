import express from 'express';
import controller from '../controller';

const SessionRouter = express.Router();

SessionRouter.post('/login', controller.session.login);

export default SessionRouter;
