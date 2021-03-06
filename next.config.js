const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    API_BASE: process.env.API_BASE,
    SECRET_KEY: process.env.SECRET_KEY,
    ENCRYPTED_PASSWORD: process.env.ENCRYPTED_PASSWORD
  }
});
