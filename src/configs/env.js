/* eslint-disable no-undef */

const dev = {
  stage: process.env.NEXT_STAGE,
  key: process.env.NEXT_APIGW_KEY,
};

const config = {
  stage: typeof window === 'object' && window._env_ && window._env_.NEXT_STAGE,
  key:
    typeof window === 'object' && window._env_ && window._env_.NEXT_APIGW_KEY,
};

const env = process.env.NEXT_STAGE === 'development' ? dev : config;

export default env;
