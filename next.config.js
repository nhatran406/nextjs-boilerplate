/* eslint-disable no-undef */
const withSass = require('@zeit/next-sass');
const withOffline = require('next-offline');
const routes = require('./next.route');
require('dotenv').config();
module.exports = withOffline(
  withSass({
    webpack: (config, { webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      // Important: return the modified config
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
      return config;
    },
    env: {
      NEXT_STAGE: process.env.NEXT_STAGE,
      NEXT_APIGW_KEY: process.env.NEXT_APIGW_KEY,
    },
    sassOptions: {
      includePaths: ['src'],
    },
    target: process.env.NEXT_TARGET || 'server',
    workboxOpts: {
      swDest: 'service-worker.js',
      runtimeCaching: [
        {
          urlPattern: /[.](png|jpg|jpeg|svg|ico|css|otf)/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'assets-cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: /^https.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'https-cache',
          },
        },
        {
          urlPattern: /^http.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'http-cache',
          },
        },
      ],
    },
    exportPathMap: async () => {
      return routes;
    },
  }),
);
