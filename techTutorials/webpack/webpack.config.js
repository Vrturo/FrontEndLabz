module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'jshint'
        }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: /images/,
        loader: 'url-loader'
      }
    ]
  }
};