import mongoose from 'mongoose';

const normalCommentsSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  userID: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  aromaScore: {
    type: Number,
    required: true,
  },
  flavorScore: {
    type: Number,
    required: true,
  },
  sweetnessScore: {
    type: Number,
    required: true,
  },
  bodyScore: {
    type: Number,
    required: true,
  },
  textureScore: {
    type: Number,
    required: true,
  },
  afterTasteScore: {
    type: Number,
    required: true,
  },
  balanceScore: {
    type: Number,
    required: true,
  },
  defectScore: {
    type: Number,
    required: true,
  },
  aromaPositive: {
    type: String,
    required: true,
  },
  flavorPositive: {
    type: String,
    required: true,
  },
  sweetnessPositive: {
    type: String,
    required: true,
  },
  bodyPositive: {
    type: String,
    required: true,
  },
  texturePositive: {
    type: String,
    required: true,
  },
  afterTastePositive: {
    type: String,
    required: true,
  },
  balancePositive: {
    type: String,
    required: true,
  },
  aromaNegative: {
    type: String,
    required: true,
  },
  flavorNegative: {
    type: String,
    required: true,
  },
  sweetnessNegative: {
    type: String,
    required: true,
  },
  bodyNegative: {
    type: String,
    required: true,
  },
  textureNegative: {
    type: String,
    required: true,
  },
  afterTasteNegative: {
    type: String,
    required: true,
  },
  balanceNegative: {
    type: String,
    required: true,
  },
  defectNegative: {
    type: String,
    required: true,
  },
}, {
  strict: 'throw',
  timestamps: true,
});

export default mongoose.model('normalComments', normalCommentsSchema);
