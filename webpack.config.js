const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
    const isDev = argv.mode !== 'production';

    return {
        entry: './src/main.jsx',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: isDev ? 'bundle.js' : 'bundle.[contenthash].js',
            publicPath: '/',
            clean: true,
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader', 'postcss-loader'],
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg|ico|webp)$/,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    type: 'asset/resource',
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
            new Dotenv({
                path: './.env.local',
                safe: false,
                systemvars: true,
            }),
        ],
        devServer: {
            port: 5173,
            historyApiFallback: true,
            hot: true,
            open: true,
        },
        devtool: isDev ? 'source-map' : false,
    };
};
