const path = require('path');
const glob = require('glob');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const stylelint = require('stylelint');
const postcssPresetEnv = require('postcss-preset-env');
const cssMqpacker = require('css-mqpacker');
const cssnano = require('cssnano');

const PATHS = {
  src: path.join(__dirname, 'src'),
};

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  target: 'web',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                postcssImport({
                  plugins: [
                    stylelint,
                  ],
                }),
                postcssPresetEnv({
                  stage: 0,
                }),
                autoprefixer,
                tailwindcss,
                cssMqpacker,
                cssnano,
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          {
            'loader': 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            'loader': 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      excludeChunks: ['server'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    //new PurgecssPlugin({
    //  paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    //  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    //}),
  ],
};
