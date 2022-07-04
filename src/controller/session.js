import validator from '../../libs/validator';
import service from '../service';

const SessionController = {
  async login(req, res) {
    const rule = {
      account: {
        type: 'string',
        allowEmpty: false,
      },
      password: {
        type: 'string',
        allowEmpty: false,
        min: 4,
      },
    };

    try {
      validator.validate(req.body, rule);
      const response = await service.session.login(req.body);
      res.json(response);
    } catch (error) {
      res.status(400).json({ message: `Failed to Login: ${error}` });
    }
  },
};

export default SessionController;
