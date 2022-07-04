import argon2 from 'argon2';
import model from '../models';
import logger from '../../libs/logger';

const userService = {
  async create(params) {
    try {
      const savedParams = params;
      const hash = await argon2.hash(params.password);
      savedParams.password = hash;
      const res = await model.users.create(savedParams);
      logger.info('[User Service] Create user successfully');
      return res;
    } catch (error) {
      logger.error('[User Service] Failed to create user to database:', error);
      throw new Error(`Failed to create user to database, ${error}`);
    }
  },
  async list(params) {
    try {
      const res = await model.users.find({}, null, { limit: params.limit, skip: params.skip });
      logger.info('[User Service] List user successfully');
      return res;
    } catch (error) {
      logger.error('[User Service] Failed to list user in database:', error);
      throw new Error(`Failed to List user in database, ${error}`);
    }
  },
};

export default userService;
