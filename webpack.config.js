const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/App.jsx', //  Точка входа
    output:{
        path:path.resolve(__dirname, 'dist'), // Абсолютный путь
        filename: 'bundle.js' // Этот файл будет создан
    },
    mode: 'development', // Режим сборки
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Принимать правила к ...
                exclude: /node_modules/, // За исключением ...
                use: 'babel-loader' // Применять эти правила
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'style.css'}),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname + 'dist'),
        port:8080
    }
};