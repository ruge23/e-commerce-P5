const path= require ('path');

module.exports = {
  entry: [
    './src/app.js'
  ],
  module: {
    loaders: [{
      test: /(\.js|\.jsx)$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      query: { presets: ['es2015', 'react'] },
    }]
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, '/public/dist'),
  },
  devtool: "source-map",
  // resolve: {
  //   extensions: ['.js', '.jsx']
  // },
};
