module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.exec\.js$/,
        use: ['script-loader']
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.(eot|woff)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(gif|jpe?g|png)$/,
        loader: 'url-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  mode: 'none'
};
