import model from '../models';
import logger from '../../libs/logger';

const checkEvent = async (event) => {
  const res = await model.verificationCodes.findOne({ content: event });
  if (res === null || res.usage !== 'event') {
    throw new Error('Can not find the event in database');
  }
};

const expertCommentsService = {
  async create(params, userID) {
    try {
      const savedParams = params;
      if (savedParams.event !== undefined) {
        await checkEvent(savedParams.event);
      }
      savedParams.userID = userID;
      const res = await model.expertComments.create(savedParams);
      logger.info('[Expert Comments Service] Create expert comment successfully');
      return res;
    } catch (error) {
      logger.error('[Expert Comments Service] Failed to create expert comments to database');
      throw new Error(`Failed to create expert comments to database, ${error}`);
    }
  },
  async list(params, userID) {
    try {
      const filter = {
        userID,
        createdAt: { $gte: params.startDate, $lte: params.endDate },
      };
      const res = await model.expertComments.find(filter, null, { limit: params.limit, skip: params.skip });
      logger.info('[Expert Comments Service] List expert comments successfully');
      return res;
    } catch (error) {
      logger.error('[Expert Comments Service] Failed to list expert comments', error);
      throw new Error(`Failed to list expert comments to database, ${error}`);
    }
  },
  async adminList(params) {
    try {
      const res = await model.expertComments.find({}, null, { limit: params.limit, skip: params.skip });
      logger.info('[Expert Comments Service] Admin list expert comments successfully');
      return res;
    } catch (error) {
      logger.error('[Expert Comments Service] Failed to do admin list expert comments', error);
      throw new Error(`Failed to do admin list expert comments to database, ${error}`);
    }
  },
  async update(params, userID) {
    try {
      const filter = { _id: params._id, userID };
      const updateParams = params;
      delete updateParams._id;
      const res = await model.expertComments.findOneAndUpdate(filter, updateParams, {
        new: true,
      });
      return res;
    } catch (error) {
      logger.error('[Expert Comments Service] Failed to update expert comments', error);
      throw new Error(`Failed to update expert comments, ${error}`);
    }
  },
};

export default expertCommentsService;
