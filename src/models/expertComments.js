import mongoose from 'mongoose';

const expertCommentsSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  event: {
    type: String,
    required: false,
  },
  userID: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  color: {
    type: Number,
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
  aftertasteScore: {
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
    type: [{
      type: String,
    }],
    required: true,
  },
  flavorPositive: {
    type: [{
      type: String,
    }],
    required: true,
  },
  sweetnessPositive: {
    type: [{
      type: String,
    }],
    required: true,
  },
  bodyPositive: {
    type: [{
      type: String,
    }],
    required: true,
  },
  texturePositive: {
    type: [{
      type: String,
    }],
    required: true,
  },
  aftertastePositive: {
    type: [{
      type: String,
    }],
    required: true,
  },
  balancePositive: {
    type: [{
      type: String,
    }],
    required: true,
  },
  aromaNegative: {
    type: [{
      type: String,
    }],
    required: true,
  },
  flavorNegative: {
    type: [{
      type: String,
    }],
    required: true,
  },
  sweetnessNegative: {
    type: [{
      type: String,
    }],
    required: true,
  },
  bodyNegative: {
    type: [{
      type: String,
    }],
    required: true,
  },
  textureNegative: {
    type: [{
      type: String,
    }],
    required: true,
  },
  aftertasteNegative: {
    type: [{
      type: String,
    }],
    required: true,
  },
  balanceNegative: {
    type: [{
      type: String,
    }],
    required: true,
  },
  defectNegative: {
    type: [{
      type: String,
    }],
    required: true,
  },
}, {
  strict: 'throw',
  timestamps: true,
});

export default mongoose.model('expertComments', expertCommentsSchema);
