import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  account: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    enum: ['expert', 'normal', 'admin'],
    default: 'normal',
  },
  store: {
    type: String,
    required: false,
  },
}, {
  strict: 'throw',
});

export default mongoose.model('Users', usersSchema);
