import validator from '../../libs/validator';
import logger from '../../libs/logger';
import service from '../service';

const userController = {
  async register(req, res) {
    const rule = {
      username: {
        type: 'string',
        allowEmpty: false,
        min: 1,
      },
      account: {
        type: 'string',
        allowEmpty: false,
        min: 1,
      },
      password: {
        type: 'string',
        allowEmpty: false,
        min: 4,
      },
      role: {
        type: 'string',
        enum: ['expert', 'normal'],
      },
      store: {
        type: 'string',
        allowEmpty: true,
      },
      email: {
        type: 'string',
        allowEmpty: true,
      },
    };

    try {
      validator.validate(req.body, rule);
      await service.user.create(req.body);
      logger.info('[User Controller] Register successfully');
      res.json({ success: true });
    } catch (error) {
      logger.error('[User Controller] Failed to register:', error);
      res.status(400).json({ message: `Failed to register, ${error}` });
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
    };

    try {
      validator.validate(req.body, rule);
      const users = await service.user.list(req.body);
      logger.info('[User Controller] List successfully');
      res.json({ users });
    } catch (error) {
      logger.error('[User Controller] Failed to list users:', error);
      res.status(400).json({ message: `Failed to list users, ${error}` });
    }
  },
  async updatePassword(req, res) {
    const rule = {
      newPassword: {
        type: 'string',
        allowEmpty: false,
        min: 4,
      },
      oldPassword: {
        type: 'string',
        allowEmpty: false,
      },
    };

    try {
      validator.validate(req.body, rule);
      await service.user.updatePassword(req.body, req.user._id);
      logger.info('[User Controller] Update password successfully');
      res.json({ success: true });
    } catch (error) {
      logger.error('[User Controller] Failed to update user password:', error);
      res.status(400).json({ message: `Failed to update user password, ${error}` });
    }
  },
};

export default userController;
