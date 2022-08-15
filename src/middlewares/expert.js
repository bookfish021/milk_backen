import logger from '../../libs/logger';

const expertMiddleware = async (req, res, next) => {
  const { user } = req;
  if (user.role === 'expert' || user.role === 'admin') {
    next();
  } else {
    logger.error('[Admin Middleware] Authorization failed, not a valid role.');
    res.status(401).json({ message: 'Authorization failed.' });
  }
};

export default expertMiddleware;
