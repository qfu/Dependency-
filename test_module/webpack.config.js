var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            ON_ADD: process.env.NODE_ENV === 'add',
            ON_SUB: process.env.NODE_ENV === 'sub'
        })
    ]
};