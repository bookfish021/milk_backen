import validator from '../../libs/validator';
import logger from '../../libs/logger';
import service from '../service';
import { normalCommentsRule } from './validationRule';

const normalCommentsController = {
  async create(req, res) {
    try {
      req.body.date = new Date(req.body.date);
      validator.validate(req.body, normalCommentsRule);
      await service.normalComments.create(req.body, req.user._id);
      logger.info('[Normal Comments Controller] Create normal comments successfully');
      res.json({ success: true });
    } catch (error) {
      logger.error('[Normal Comments Controller] Failed to create normal comments', error);
      res.status(400).json({ message: `Failed to create normal comments, ${error}` });
    }
  },
  async list(req, res) {
    const rule = {
      skip: {
        type: 'number',
      },
      limit: {
        type: 'number',
      },
      startDate: {
        type: 'date',
      },
      endDate: {
        type: 'date',
      },
    };

    try {
      req.body.startDate = new Date(req.body.startDate);
      req.body.endDate = new Date(req.body.endDate);
      validator.validate(req.body, rule);
      const normalComments = await service.normalComments.list(req.body, req.user._id);
      logger.info('[Normal Comments Controller] List normal comments successfully');
      res.json({ normalComments });
    } catch (error) {
      logger.error('[Normal Comments Contoller] Failed to list normal comments:', error);
      res.status(400).json({ message: `Failed to list normal comments, ${error}` });
    }
  },
  async adminList(req, res) {
    const rule = {
      skip: {
        type: 'number',
      },
      limit: {
        type: 'number',
      },
    };

    try {
      validator.validate(req.body, rule);
      const normalComments = await service.normalComments.adminList(req.body);
      logger.info('[Normal Comments Controller] Admin list normal comments successfully');
      res.json({ normalComments });
    } catch (error) {
      logger.error('[Normal Comments Contoller] Failed to do admin list normal comments:', error);
      res.status(400).json({ message: `Failed to do admin list normal comments, ${error}` });
    }
  },
  async update(req, res) {
    try {
      req.body.date = new Date(req.body.date);
      validator.validate(req.body, normalCommentsRule);
      validator.validate(req.body, {
        _id: {
          type: 'string',
        },
      });
      await service.normalComments.update(req.body, req.user._id);
      logger.info('[Normal Comments Controller] Update normal comments successfully');
      res.json({ success: true });
    } catch (error) {
      logger.error('[Normal Comments Controller] Failed to update normal comments:', error);
      res.status(400).json({ message: `Failed to udpate normal comments, ${error}` });
    }
  },
};

export default normalCommentsController;
