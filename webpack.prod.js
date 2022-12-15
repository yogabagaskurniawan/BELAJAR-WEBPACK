
const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
    // ada mode " production / development" untuk melihat file di bundle.js seperti codingan kita sendiri 
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js',
        // assetModuleFilename:"img/[name].[hash][ext]",
        assetModuleFilename: "img/[hash][ext]",
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.[contenthash].css',
        }),
    ],
});