const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: ['./src/index.js','./src/index1.js'],
        add: './src/add.js',
        // other:'./src/other.js'
    },
    devServer: {
        port: 3000,
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
        clean: true,
    },
    module: {
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: 'index.html',
        })
    ],
    optimization: {
        runtimeChunk:'single'
    }
}