// src/_data/env.js

const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = 'prod';
const prodUrl = 'https://lrnecgysiam.com/';
const devUrl = 'http://localhost:8080';
const baseUrl = environment === PROD_ENV ? prodUrl : devUrl;
const isProd = environment === PROD_ENV;

const folder = {
  assets: 'assets',
};

const dir = {
  img: `/${folder.assets}/img/`,
}

module.exports = {
  siteName: 'lrnecgysiam',
  author: 'Chris Samuel',
  environment,
  isProd,
  folder,
  base: {
    site: baseUrl,
    img: `${baseUrl}${dir.img}`,
  },
};

module.exports = {
    tracking: {
      gtag:  'G-8E58LG1VLH',
    },
  };