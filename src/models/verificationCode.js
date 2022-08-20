import mongoose from 'mongoose';

const verificationCodeSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    unique: true,
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
  startAt: {
    type: Date,
    required: false,
  },
}, {
  strict: 'throw',
  timestamps: true,
});

verificationCodeSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.model('verificationCodes', verificationCodeSchema);
