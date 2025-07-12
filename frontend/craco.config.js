const path = require('path');
module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "~@/styles/variables.scss";
        `,
      },
    },
  },
  webpack: {
    alias: { '@': path.resolve(__dirname, 'src') }
  }
};