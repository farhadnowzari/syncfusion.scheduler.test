const webpack = require('webpack');
module.exports = {
    configureWebpack: {
        entry: ['./src/sass/app.scss', './src/main.js'],
    },
    chainWebpack: (config) => {
        config.resolve.symlinks(false);
    }
}