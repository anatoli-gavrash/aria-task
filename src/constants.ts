import type {Advantage, Post, Shop} from "./types";

const ADVANTAGES: Advantage[] = [
  {
    title: 'subscribers',
    value: '20K+'
  },
  {
    title: 'successful cases',
    value: '19,5K'
  },
  {
    title: 'rating',
    value: '4.8/5'
  }
];

const SHOPS: Shop[] = [
  {
    pictureUrl: '/img/svg/icon__google-play.svg',
    text: 'get it on',
    name: 'Google play'
  },
  {
    pictureUrl: '/img/svg/icon__app-store.svg',
    text: 'Available on the',
    name: 'App Store'
  }
];

const POSTS: Post[] = [
  {
    avatarUrl: '/img/png/avatar__lorenzo.png',
    name: 'Lorenzo',
    nickname: '@lorenzoo',
    message: 'Amazing Telegram bot! Provides real-time crypto prices and news'
  },
  {
    avatarUrl: '/img/png/avatar__adalina.png',
    name: 'Adalina',
    nickname: '@ada',
    message: 'Must-have bot for crypto traders. Accurate signals and analysis'
  },
  {
    avatarUrl: '/img/png/avatar__alexander.png',
    name: 'Alexander',
    nickname: '@alex_x',
    message: 'Superb cryptocurrency bot! Quick updates and reliable data'
  },
  {
    avatarUrl: '/img/png/avatar__rushana.png',
    name: 'Rushana',
    nickname: '@Hana',  
    message: 'Efficient and user-friendly bot. Simplifies crypto trading tasks'
  },
];

export {ADVANTAGES, SHOPS, POSTS};
