const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
   entry: {
      index: './src/index.js',
   },
   module: {
      rules: [
         {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
            type: 'asset/resource',
         },
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env'],
               },
            },
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'Mario',
         favicon: './src/assets/favicon.ico',
      }),
      new ESLintPlugin(),
   ],
   output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'assets/[hash][ext][query]',
      clean: true,
      pathinfo: false,
   },
};
