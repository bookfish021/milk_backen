import model from '../models';
import logger from '../../libs/logger';

const expeertCommentsService = {
  async create(params, userID) {
    try {
      const savedParams = params;
      savedParams.userID = userID;
      const res = await model.expertComments.create(savedParams);
      logger.info('[Expert Comments Service] Create expert comment successfully');
      return res;
    } catch (error) {
      logger.error('[Expert Comments Service] Failed to create expeert comments to database');
      throw new Error(`Failed to create expert comments to database, ${error}`);
    }
  },
  async list(params) {
    try {
      const res = await model.expertComments.find({}, null, { limit: params.limit, skip: params.skip });
      logger.info('[Expert Comments Service] List expert comments successfully');
      return res;
    } catch (error) {
      logger.error('[Expert Comments Service] Failed to list expert comments', error);
      throw new Error(`Failed to list expert comments to database, ${error}`);
    }
  },
  async update(params, userID) {
    try {
      const expertComment = await model.expertComments.findById(params._id).lean();
      // if comment not exists
      if (!expertComment) {
        logger.error('[Expert Comments Service] Expert comment not found');
        throw new Error('Error expert comment not found');
      }
      // find expert id and update
      const filter = { _id: params._id, userID };
      const updateParams = params;
      delete updateParams.expertCommentID;
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

export default expeertCommentsService;
