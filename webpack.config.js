const path = require('path');

module.exports = {
    mode: 'production',    // ada mode "development" untuk melihat file di bundle.js seperti codingan kita sendiri 
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js',
    },
    watch: true,    // unk kalau ada modifikasi pada file" tertentu itu bisa langsung jalan tidak harus ketikan "npm run build" di terminal // cara matikan ctrl+c
    devtool: false,      // untuk menghilangkan "eval" pada bundle.js

};