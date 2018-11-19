const path = require('path');
const webpack = require('webpack');
const destinationDirectory = path.resolve(__dirname, '../Public');
const vendorDirectory = path.resolve(__dirname, './node_modules');

module.exports = {
    entry: {
        script: [
            vendorDirectory + "/jquery/dist/jquery.js",
            './script.js'
        ]
    },
    output: {
        path: destinationDirectory,
        filename: '[name].bundle.[contenthash].js',
        libraryTarget: 'var',
        library: 'script'
    },
    mode: 'development',
    watchOptions: {
        aggregateTimeout: 1000
    }
};
