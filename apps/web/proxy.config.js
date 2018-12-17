const PROXY_CONFIG = {
  '/api': {
    target: getTarget(process.env.PROXY_TARGET),
    secure: false,
    pathRewrite: {
      '^/api': '',
    },
    changeOrigin: getChangeOrigin(process.env.PROXY_TARGET),
    logLevel: 'debug',
  },
};

function getTarget(proxyTarget) {
  switch (proxyTarget) {
    case 'local':
      return 'http://localhost:3000';

    case 'live':
      return 'https://pentacledev.com/api';

    default:
      console.warn('Missing PROXY_TARGET in the env');
      break;
  }
}

function getChangeOrigin(proxyTarget) {
  return proxyTarget === 'live';
}

module.exports = PROXY_CONFIG;
