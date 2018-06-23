const path = require('path');

module.exports = {
     entry: './src/app.js',
     output: {
         path: path.join(__dirname,'public'),
         filename: 'bundle.js'
     },
     module: {
         rules: [{
             loader:'babel-loader',
             test: /\.js$/, //only js files
             exclude: /node_modules/
         }]
     },
     devtool: 'cheap-module-eval-source-map'  //show where exacly is error
};