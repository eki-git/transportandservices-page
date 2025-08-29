const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack'); // DODAJ TO

const entryPath = "src";

module.exports = {
    mode: "none",
    entry: `./${entryPath}/js/index.js`,
    devtool: "inline-source-map",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "build"),
        clean: true,
        publicPath: "/",
    },
    devServer: {
        open: true,
        hot: true,
        static: [
            {
                directory: path.join(__dirname, entryPath),
                publicPath: "/",
                serveIndex: true,
            },
        ],
        devMiddleware: {
            writeToDisk: true,
        },
        compress: true,
        port: 3002,
        historyApiFallback: {
            rewrites: [
                { from: /^\/osebni-prevoz/, to: '/index.html' },
                { from: /^\/razisci/, to: '/index.html' },
            ],
        },
    },
    resolve: {  // DODAJ RESOLVE SECTION
        fallback: {
            "crypto": false
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [['autoprefixer']],
                            },
                        },
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            }
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
        new Dotenv(), // DODAJ TO
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: entryPath +"/index.html",
            inject: false
        }),
        new MiniCssExtractPlugin({
            filename: "css/style.css",
        }),
    ],
};