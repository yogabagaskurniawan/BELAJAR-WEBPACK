const path = require('path');

module.exports = {
    mode: 'development',    // ada mode " production" untuk melihat file di bundle.js seperti codingan kita sendiri 
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js',
    },
    watch: true,    // unk kalau ada modifikasi pada file" tertentu itu bisa langsung jalan tidak harus ketikan "npm run build" di terminal // cara matikan ctrl+c
    devtool: false,      // untuk menghilangkan "eval" pada bundle.js
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
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
};