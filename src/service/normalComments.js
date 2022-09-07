import model from '../models';
import logger from '../../libs/logger';
import verificationCode from './verificationCode';

const normalCommentsService = {
  async create(params, userID) {
    try {
      const savedParams = params;
      logger.info(savedParams.event);
      if (savedParams.event !== undefined) {
        await verificationCode.verify(savedParams.event, 'event');
      }
      savedParams.userID = userID;
      const res = await model.normalComments.create(savedParams);
      logger.info('[Normal Comments Service] Create normal comment successfully');
      return res;
    } catch (error) {
      logger.error('[Normal Comments Service] Failed to create normal comments to database');
      throw new Error(`Failed to create normal comments to database, ${error}`);
    }
  },
  async list(params, userID) {
    try {
      logger.info(userID);
      const filter = {
        userID,
        createdAt: { $gte: params.startDate, $lte: params.endDate },
      };
      const res = await model.normalComments.find(filter, null, { limit: params.limit, skip: params.skip });
      logger.info('[Normal Comments Service] List normal comments successfully');
      return res;
    } catch (error) {
      logger.error('[Normal Comments Service] Failed to list normal comments', error);
      throw new Error(`Failed to list normal comments in database, ${error}`);
    }
  },
  async adminList(params) {
    try {
      const res = await model.normalComments.find({}, null, { limit: params.limit, skip: params.skip });
      logger.info('[Normal Comments Service] Admin list normal comments successfully');
      return res;
    } catch (error) {
      logger.error('[Normal Comments Service] Failed to do admin list normal comments', error);
      throw new Error(`Failed to do admin list normal comments in database, ${error}`);
    }
  },
  async update(params, userID) {
    try {
      const filter = { _id: params._id, userID };
      const updateParams = params;
      delete updateParams._id;
      const res = await model.normalComments.findOneAndUpdate(filter, updateParams, {
        new: true,
      });
      return res;
    } catch (error) {
      logger.error('[Normal Comments Service] Failed to update Normal comments', error);
      throw new Error(`Failed to update Normal comments, ${error}`);
    }
  },
};

export default normalCommentsService;
