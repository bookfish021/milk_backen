import mongoose from 'mongoose';

const verificationCode = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  usage: {
    type: String,
    enum: ['expert', 'event'],
    required: true,
  },
  expireAt: {
    type: Date,
    default: () => {
      const date = new Date();
      date.setDate(date.getDate() + 1);
      return date;
    },
  },
}, {
  strict: 'throw',
  timestamps: true,
});

verificationCode.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.model('verificationCodes', verificationCode);
