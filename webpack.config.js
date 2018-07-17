let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");

let conf = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    devServer: {
        overlay: true,
        stats: 'errors-only'
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [
                // "style-loader",
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "sass-loader"
            ]
        },
        {
            test: /.pug$/,
            use: {
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        },
        {
            test: /\.(png|jpg|gif|ico)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    }
                }
            ]
        }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.pug'),
        favicon: path.resolve(__dirname, 'src/images/favicon.ico')
    }),
    new MiniCssExtractPlugin({
        filename: "[name].css"
    })
    ],
}

module.exports = conf;