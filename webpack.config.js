const path = require('path');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-nested-ancestors'),
                require('postcss-nested')
              ]
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader?removeSVGTagAttrs=false'
      }
    ]
  },
  entry: {
    imagetool: path.join(__dirname, './src/index.js'),
    uploader: path.join(__dirname, './src/uploader.js')
  },
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: '[name].js',
    library: 'ImageTool',
    libraryTarget: 'umd',
    libraryExport: 'default'
  }
};
