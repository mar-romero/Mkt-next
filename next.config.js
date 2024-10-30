/* eslint-disable @typescript-eslint/no-require-imports */
// next.config.js
const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')]
  }
};
