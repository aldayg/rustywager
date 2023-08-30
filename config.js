const auth = {
  steam: {
    apiKey: process.env.STEAM_API_KEY || "7B1A72C988490CA1A9881244049ED158"
  },
  jwt: {
    secret: process.env.JWT_SECRET || "candemor de jarl"
  },
  skinport: {
    clientId: process.env.SKINPORTID || '623d4b6178c6452c980f1e05429f4a4c',
    clientSecret: process.env.SKINPORTSECRET || 'J25rX3u3nM+a9ltmngWUMBqfZh7Kun9NYVteeYPH8+OJe/4INh22lbnGgfM4U82jKonRQBGKT62lWP/tFWoK6w=='
  }
}

const api = {
  host: process.env.NODE_ENV !== "production" ? 'https://rustywager.com/' : process.env.API_URL,
  url: process.env.NODE_ENV !== "production" ? 'https://rustywager.com/' : '/',
}

const app = {
  host: process.env.NODE_ENV !== "production" ? 'https://rustywager.com/' : process.env.APP_URL,
  url: process.env.NODE_ENV !== "production" ? 'https://rustywager.com/' : '/'
}

const database = {
  uri: 'mongodb://localhost',
  redis: 'redis://localhost'
}

const metadata = {
  name: 'Rustywager',
  url: 'Rustywager.com',
  email: 'support@rustywager.com',
  discord: 'https://discord.gg/5DQT8QFVUY',
  twitter: 'https://twitter.com/rustywager_com',
  useLanding: true,
  gameId: 252490,
  contextId: 2,
  gameName: 'Rust'
}

const coinflip = {
  minItems: 1,
  maxItems: 15,
  minAmount: 0.05,
  itemThreshold: 0.02,
}

const jackpot = {
  minItems: 1,
  maxItems: 15,
  minAmount: 0.05,
  itemThreshold: 0.02,
  game: {
    maxItems: 240,
    depositsToStart: 2
  },
  countdowns: {
    gameCountdown: 60 // 60 seconds
  },
  allowedItems: ['*'],
  numberOfPastRounds: 5,
}

const tax = {
  promo: 0.05,
  noPromo: 0.10
}

const inventory = {
  cacheTimeout: 24 * 60 * 60, //1 day
  reloadCooldown: 60,
  endpoints: {
    default: 'inventory',
    forceReload: 'inventory/force'
  }
}

const prices = {
  updateInterval: 24 * 60 * 60 * 1000, //1 day
  apiKey: process.env.BACKPACK_API || '5d771aa2d3817203cc276b55',
}

const socket = {
  public: {
    param: 'socket-public',
    path: ''
  },
  secure: {
    param: 'socket-secure',
    path: '/secure'
  }
}

const bots = {
  domain: 'RustyWager.com',
  pollTime: 5 * 1000, /* 5 seconds */
  cancelTime: 2 * 60 * 1000, /* 2 minutes */
  confirmationTime: 15 * 1000, /* 15 seconds */
}

const rake = {
  automatedRakeTime: 60 * 60 * 1000, /* 1 hour */
  rakeAccount: '76561199059647240',
  automatedRakeEnabled: true,
}

const chat = {
  minLevel: -1 
}

module.exports = { //not transpiled
  auth: auth,
  jackpot: jackpot,
  prices: prices,
  api: api,
  tax: tax,
  app: app,
  coinflip: coinflip,
  socket: socket,
  inventory: inventory,
  database: database,
  metadata: metadata,
  bots: bots,
  rake: rake,
  chat: chat,
}
