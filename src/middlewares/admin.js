import logger from '../../libs/logger';

const adminMiddleware = async (req, res, next) => {
  const { user } = req;
  if (user.role === 'admin') {
    next();
  } else {
    logger.error('[Admin Middleware] Authorization failed, miss role information.');
    res.status(401).json({ message: 'Authorization failed.' });
  }
};

export default adminMiddleware;
