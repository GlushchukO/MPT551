var path = require('path');

module.exports = {
  entry: './src/javascript/event.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};