const expertCommentsRule = {
  productName: {
    type: 'string',
    allowEmpty: false,
  },
  date: {
    type: 'date',
    allowEmpty: false,
  },
  event: {
    type: 'string',
    optional: true,
    allowEmpty: false,
  },
  color: {
    type: 'number',
    allowEmpty: false,
  },
  score: {
    type: 'number',
    allowEmpty: false,
  },
  aromaScore: {
    type: 'number',
    allowEmpty: false,
  },
  flavorScore: {
    type: 'number',
    allowEmpty: false,
  },
  sweetnessScore: {
    type: 'number',
    allowEmpty: false,
  },
  bodyScore: {
    type: 'number',
    allowEmpty: false,
  },
  textureScore: {
    type: 'number',
    allowEmpty: false,
  },
  aftertasteScore: {
    type: 'number',
    allowEmpty: false,
  },
  balanceScore: {
    type: 'number',
    allowEmpty: false,
  },
  defectScore: {
    type: 'number',
    allowEmpty: false,
  },
  overallScore: {
    type: 'number',
    allowEmpty: false,
  },
  aromaPositive: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  flavorPositive: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  sweetnessPositive: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  bodyPositive: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  texturePositive: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  aftertastePositive: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  balancePositive: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  aromaNegative: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  flavorNegative: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  sweetnessNegative: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  bodyNegative: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  textureNegative: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  aftertasteNegative: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  balanceNegative: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  defectNegative: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
};

const normalCommentsRule = {
  productName: {
    type: 'string',
    allowEmpty: false,
  },
  date: {
    type: 'date',
    allowEmpty: false,
  },
  event: {
    type: 'string',
    optional: true,
    allowEmpty: false,
  },
  color: {
    type: 'number',
    allowEmpty: false,
  },
  score: {
    type: 'number',
    allowEmpty: false,
  },
  aromaScore: {
    type: 'number',
    allowEmpty: false,
  },
  flavorScore: {
    type: 'number',
    allowEmpty: false,
  },
  sweetnessScore: {
    type: 'number',
    allowEmpty: false,
  },
  bodyScore: {
    type: 'number',
    allowEmpty: false,
  },
  textureScore: {
    type: 'number',
    allowEmpty: false,
  },
  aftertasteScore: {
    type: 'number',
    allowEmpty: false,
  },
  balanceScore: {
    type: 'number',
    allowEmpty: false,
  },
  defectScore: {
    type: 'number',
    allowEmpty: false,
  },
  overallScore: {
    type: 'number',
    allowEmpty: false,
  },
  aromaPositive: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  flavorPositive: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  sweetnessPositive: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  bodyPositive: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  texturePositive: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  aftertastePositive: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  balancePositive: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  aromaNegative: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  flavorNegative: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  sweetnessNegative: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  bodyNegative: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  textureNegative: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  aftertasteNegative: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  balanceNegative: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
  defectNegative: {
    type: 'array',
    items: 'string',
    allowEmpty: false,
  },
};

export {
  expertCommentsRule,
  normalCommentsRule,
};
