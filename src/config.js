const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = 'guochanliangxinNFT';
const description = 'guochanliangxinNFT';
const baseUri = 'ipfs://xxxx';

const solanaMetadata = {
  symbol: 'YC',
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: 'https://www.youtube.com/c/hashlipsnft',
  creators: [
    {
      address: '7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC',
      share: 100,
    },
  ],
};

const layerConfigurations = [
  {
    growEditionSizeTo: 400,
    layersOrder: [
      {
        name: 'Beijing',
        options: {
          bypassDNA: true,
        },
      },
      { name: 'Lian' },
      { name: 'Yanjingkaixin' },
      { name: 'Bizi' },
      { name: 'Zuibakaixin' },
      { name: 'Faxing' },
    ],
  },
  {
    growEditionSizeTo: 800,
    layersOrder: [
      {
        name: 'Beijing',
        options: {
          bypassDNA: true,
        },
      },
      { name: 'Lian' },
      { name: 'Yanjingshengqi' },
      { name: 'Bizi' },
      { name: 'Zuibashengqi' },
      { name: 'Faxing' },
    ],
  },
  {
    growEditionSizeTo: 900,
    layersOrder: [
      {
        name: 'Beijing',
        options: {
          bypassDNA: true,
        },
      },
      { name: 'Lian' },
      { name: 'Yanjing' },
      { name: 'Huzi' },
      { name: 'FaxingNan' },
    ],
  },
  {
    growEditionSizeTo: 1250,
    layersOrder: [
      {
        name: 'Beijing',
        options: {
          bypassDNA: true,
        },
      },
      { name: 'Lian' },
      { name: 'Yanjingkaixin' },
      { name: 'Saihong' },
      { name: 'Bizi' },
      { name: 'Zuibakaixin' },
      { name: 'Faxing' },
    ],
  },
  {
    growEditionSizeTo: 1400,
    layersOrder: [
      {
        name: 'Beijing',
        options: {
          bypassDNA: true,
        },
      },
      { name: 'Lian' },
      { name: 'Yanjing' },
      { name: 'Bizi' },
      { name: 'Zuiba' },
      { name: 'Queban' },
      { name: 'Faxing' },
    ],
  },
  {
    growEditionSizeTo: 1600,
    layersOrder: [
      {
        name: 'Beijing',
        options: {
          bypassDNA: true,
        },
      },
      { name: 'Lian' },
      { name: 'Yanjing' },
      { name: 'Bizi' },
      { name: 'Zuiba' },
      { name: 'Meirenzhi' },
      { name: 'Faxing' },
    ],
  },
  {
    growEditionSizeTo: 1800,
    layersOrder: [
      {
        name: 'Beijing',
        options: {
          bypassDNA: true,
        },
      },
      { name: 'Lian' },
      { name: 'Yanjing' },
      { name: 'Bizi' },
      { name: 'Zuiba' },
      { name: 'Yanjingzi' },
      { name: 'Faxing' },
    ],
  },
  {
    growEditionSizeTo: 2000,
    layersOrder: [
      {
        name: 'Beijing',
        options: {
          bypassDNA: true,
        },
      },
      { name: 'Lian' },
      { name: 'Bizi' },
      { name: 'Zuiba' },
      { name: 'Faxing' },
      { name: 'Mojing' },
    ],
  },
  {
    growEditionSizeTo: 2100,
    layersOrder: [
      {
        name: 'Beijing',
        options: {
          bypassDNA: true,
        },
      },
      { name: 'Lian' },
      { name: 'Yanjing' },
      { name: 'Bizi' },
      { name: 'Kouzhao' },
      { name: 'Faxing' },
    ],
  },
  {
    growEditionSizeTo: 2300,
    layersOrder: [
      {
        name: 'Beijing',
        options: {
          bypassDNA: true,
        },
      },
      { name: 'Lian' },
      { name: 'Yanjing' },
      { name: 'Bizi' },
      { name: 'Zuiba' },
      { name: 'Meirenzhi' },
      { name: 'Yanjingzi' },
      { name: 'Faxing' },
    ],
  },
  {
    growEditionSizeTo: 2500,
    layersOrder: [
      {
        name: 'Beijing',
        options: {
          bypassDNA: true,
        },
      },
      { name: 'Lian' },
      { name: 'Saihong' },
      { name: 'Bizi' },
      { name: 'Zuibakaixin' },
      { name: 'Faxing' },
      { name: 'Mojing' },
    ],
  },
  {
    growEditionSizeTo: 2700,
    layersOrder: [
      {
        name: 'Beijing',
        options: {
          bypassDNA: true,
        },
      },
      { name: 'Lian' },
      { name: 'Yanjing' },
      { name: 'Bizi' },
      { name: 'Zuiba' },
      { name: 'Queban' },
      { name: 'Yanjingzi' },
      { name: 'Faxing' },
    ],
  },
  {
    growEditionSizeTo: 2800,
    layersOrder: [
      {
        name: 'Beijing',
        options: {
          bypassDNA: true,
        },
      },
      { name: 'Lian' },
      { name: 'Yanjing' },
      { name: 'Bizi' },
      { name: 'Yanjingzi' },
      { name: 'Kouzhao' },
      { name: 'Faxing' },
    ],
  },
  {
    growEditionSizeTo: 2900,
    layersOrder: [
      {
        name: 'Beijing',
        options: {
          bypassDNA: true,
        },
      },
      { name: 'Lian' },
      { name: 'Bizi' },
      { name: 'Zuiba' },
      { name: 'Queban' },
      { name: 'Faxing' },
      { name: 'Mojing' },
    ],
  },
  {
    growEditionSizeTo: 3000,
    layersOrder: [
      {
        name: 'Beijing',
        options: {
          bypassDNA: true,
        },
      },
      { name: 'Lian' },
      { name: 'Yanjingshengqi' },
      { name: 'Bizi' },
      { name: 'Zuibashengqi' },
      { name: 'Faxingshengqi' },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = true;

const format = {
  width: 600,
  height: 600,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: '#ffffff',
  size: 20,
  xGap: 40,
  yGap: 40,
  align: 'left',
  baseline: 'top',
  weight: 'regular',
  family: 'Courier',
  spacer: ' => ',
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: '80%',
  static: false,
  default: '#ffffff',
};

const extraMetadata = {};

const rarityDelimiter = '#';

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: 'preview.png',
};

const preview_gif = {
  numberOfImages: 5,
  order: 'ASC', // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: 'preview.gif',
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
