const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'to do list app',
            template: path.join(__dirname, 'src/index.html'),
        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                exclude: path.join(__dirname, './node_modules'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                    {
                        loader: 'ts-loader',
                    }
                ]
            },
            // {
            //     test: /\.css$/,
            //     include: path.join(__dirname, 'src'),
            //     use: [
            //       'style-loader',
            //       {
            //         loader: 'typings-for-css-modules-loader',
            //         options: {
            //           modules: true,
            //           namedExport: true
            //         }
            //       }
            //     ]
            // }
        ]
    },
    devtool: "source-map",
    devServer: {
        host: process.env.HOST,
        port: process.env.PORT,
    },
};