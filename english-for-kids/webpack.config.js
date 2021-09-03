const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path'); // модуль node, для работы с путями
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css в отдельный файл
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.ts', // точка входа в приложение
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'), // папка куда будет складываться готовый проект (создается авто)
    filename: 'bundle.js', // название файла готового проекта
    assetModuleFilename: 'assets/[hash][ext]', // склад картинок после обработки
    clean: true, // очищает dist перед каждой сборкой
  },
  stats: {
    children: true,
  },

  module: {
    // модуль для typescript
    rules: [
      {
        test: /\.tsx?$/, // с каким расширением файлы необ. обрабатывать
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // файлы импортов
  },
  plugins: [
    new HtmlWebpackPlugin(
      // можно указать входные параметры или путь к файлу шаблону
      {
        template: './src/index.html', // путь к шаблону
      },
    ),

    /* Открыть когда надо перенести файлы */
    // new CopyPlugin({
    //   patterns: [
    // { from: './public' }, // переносится без обработки из "./public" в: корень
    //   { from: './public', to: './public' },
    // ],
    //  }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new ESLintPlugin({ extensions: ['ts', 'js'] }),
  ],
  devServer: {
    open: true, // открыть браузер
    hot: true, // перезагрузить браудер при сборке

    // contentBase: path.join(__dirname, 'public'),  // убрал картинки вкл.
    compress: true,
    port: 9000,
  },

};
