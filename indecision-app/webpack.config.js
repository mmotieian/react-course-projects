// entry point -> output

const path = require('path');

console.log("dir name: ",path.join(__dirname, 'public'));

// https://webpack.js.org/concepts/#entry
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
};