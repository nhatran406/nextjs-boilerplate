/* eslint-disable no-undef */
/* eslint-disable no-undef */
const express = require('express');
const next = require('next');
require('dotenv').config();

async function start() {
  const dev = process.env.NODE_ENV !== 'production';
  const devProxy = {
    '/api': {
      target: process.env.API_PROXY,
      pathRewrite: { '^/api': '/api' },
      changeOrigin: true,
    },
  };

  const port = parseInt(process.env.PORT, 10) || 3000;
  const env = process.env.NODE_ENV;
  const app = next({
    dir: '.',
    dev,
  });

  const handle = app.getRequestHandler();
  const server = express();

  if (dev && devProxy) {
    const proxyMiddleware = require('http-proxy-middleware');
    Object.keys(devProxy).forEach(function(context) {
      server.use(proxyMiddleware(context, devProxy[context]));
    });
  }
  await app.prepare();

  server.get('/static/*', (req, res) => handle(req, res));
  server.get('*', async (req, res, next) => {
    try {
      handle(req, res);
    } catch (e) {
      next(e);
    }
  });

  server.listen(port, err => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on port ${port} [${env}]`);
  });
}

start();
