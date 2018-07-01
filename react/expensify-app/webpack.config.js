const path = require('path');

module.exports = {
    entry: './src/playground/destructuring.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, //only js files
            exclude: /node_modules/
        }, {
            test: /\.s?css$/, //css or scss
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',  //show where exacly is error
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};