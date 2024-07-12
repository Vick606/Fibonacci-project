const path = require('path');

module.exports = {
  entry: './src/fibonacci.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
};