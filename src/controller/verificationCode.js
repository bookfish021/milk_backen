import validator from '../../libs/validator';
import logger from '../../libs/logger';
import service from '../service';

const verificationCodeController = {
  async create(req, res) {
    const rule = {
      content: {
        type: 'string',
        allowEmpty: false,
        min: 1,
      },
      usage: {
        type: 'string',
        enum: ['expert', 'event'],
        allowEmpty: false,
      },
      expireAt: {
        type: 'date',
        optional: true,
      },
    };
    try {
      if (req.body.expireAt !== undefined) {
        req.body.expireAt = new Date(req.body.expireAt);
      }
      validator.validate(req.body, rule);
      await service.verificationCode.create(req.body);
      logger.info('[Verification Code Controller] Create verification code successfully');
      res.json({ success: true });
    } catch (error) {
      logger.error('[Verification Code Controller] Failed to create verification code');
      res.status(400).json({ message: `Failed to create verification code, ${error}` });
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
      const verificationCodes = await service.verificationCode.list(req.body);
      logger.info('[Verification Code Controller] List verification code successfully');
      res.json({ verificationCodes });
    } catch (error) {
      logger.error('[Verification Code Controller] Failed to list verification code');
      res.status(400).json({ message: `Failed to list verification code, ${error}` });
    }
  },
  async update(req, res) {
    const rule = {
      id: {
        type: 'string',
        allowEmpty: false,
      },
      content: {
        type: 'string',
        allowEmpty: false,
        min: 1,
      },
      usage: {
        type: 'string',
        enum: ['expert', 'event'],
        allowEmpty: false,
      },
      expireAt: {
        type: 'date',
        optional: true,
      },
    };
    try {
      validator.validate(req.body, rule);
      await service.verificationCode.update(req.body);
      logger.info('[Verification Code Controller] Update verification code successfully');
      res.json({ success: true });
    } catch (error) {
      logger.error('[Verification Code Controller] Failed to update verification code');
      res.status(400).json({ message: `Failed to update verification code, ${error}` });
    }
  },
  async delete(req, res) {
    try {
      validator.validate(req.body, {
        id: {
          type: 'string',
          allowEmpty: false,
        },
      });
      await service.verificationCode.delete(req.body);
      logger.info('[Verification Code Controller] Delete verification code successfully');
      res.json({ success: true });
    } catch (error) {
      logger.error('[Verification Code Controller] Failed to delete verification code');
      res.status(400).json({ message: `Failed to delete verification code, ${error}` });
    }
  },
};

export default verificationCodeController;
