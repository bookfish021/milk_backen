import model from '../models';
import logger from '../../libs/logger';

const expeertCommentsService = {
  async create(params) {
    try {
      const res = await model.expertComments.create(params);
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
  async update(params, id) {
    try {
      const expertComment = await model.expertComments.findById(id).lean();
      // if comment not exists
      if (!expertComment) {
        logger.error('[Expert Comments Service] Expert comment not found');
        throw new Error('Error expert comment not found');
      }
      // find expert id and update
      const filter = { _id: id };
      const res = await model.expertComments.findOneAndUpdate(filter, params, {
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
