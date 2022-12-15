
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    // untuk pemanggilan html plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/templete.html',
        }),
    ],
    // untuk menghilangkan "eval" pada bundle.js
    devtool: false,
    module: {
        rules: [
            // {
            //     // untuk loader style.css
            //     test: /\.css$/i,
            //     use: ["style-loader", "css-loader"],

            // },
            {
                // babel-loader untuk mensuport browser" lama
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                // untuk sass-loader
                test: /\.s[ac]ss$/i,
                use: [
                    // untuk memisahkan file css dari js
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/i,
                type: 'asset/resource'
            }
        ],
    },
};