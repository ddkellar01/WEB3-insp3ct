const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    background: './extension/background.js',
    content: './extension/content.js',
    inject: './extension/inject.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/extension'),
    filename: '[name].js'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'extension/manifest.json', to: 'manifest.json' },
        { from: 'extension/popup', to: 'popup' },
        { from: 'extension/devtools', to: 'devtools' },
        { from: 'extension/panel', to: 'panel' }
      ]
    })
  ]
};
