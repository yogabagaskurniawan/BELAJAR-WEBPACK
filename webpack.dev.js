
const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
    // ada mode " production / development" untuk melihat file di bundle.js seperti codingan kita sendiri 
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        // assetModuleFilename:"img/[name].[hash][ext]",
        assetModuleFilename: "img/[name][ext]",
        clean: true,
    },
    // unk kalau ada modifikasi pada file" tertentu itu bisa langsung jalan tidak harus ketikan "npm run build" di terminal // cara matikan ctrl+c
    watch: true,
    plugins: [
        new MiniCssExtractPlugin(),
    ],
});