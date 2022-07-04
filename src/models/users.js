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
  role: {
    type: String,
    enum: ['expert', 'normal', 'admin'],
    default: 'normal',
  },
}, {
  strict: 'throw',
});

export default mongoose.model('Users', usersSchema);
