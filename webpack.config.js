const sharedConfig = {
  module: {
    loaders: [
      {
        test: /\/src\/(.*)\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}

var appConfig = Object.assign({}, sharedConfig, {
  entry: './src/app.js',
  output: {
    filename: './public/bundle.js'
  },
})

var testConfig = Object.assign({}, sharedConfig, {
  entry: './tests/index.test.js',
  output: {
    filename: './tests/bundle.js'
  },
})

module.exports = [
  appConfig, testConfig,     
]