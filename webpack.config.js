var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var CloudCmsPlugin = require('cloudcms-webpack-plugin');

module.exports = {
    "context": process.cwd(),
    "entry": ["./index.js"],
    "output": {
        "path": __dirname + "/dist",
        "filename": "index.js",
        "libraryTarget": "amd"
    },
    "externals": [
        CloudCmsPlugin.externalFn
    ],
    "module": {
        "rules": [{
            // write out CSS referenced files into assets directory
            test: /\.(jpe?g|png|gif|woff)$/i,
            loader:"file-loader",
            query:{
                name:'[path][name]-[hash].[ext]',
                outputPath: 'assets/'
            }
        }, {
            // support for inline css within modules
            "test": /\.css$/,
            "use": [{
                "loader": "css-loader",
                "options": {
                    "minimize": true
                }
            }]
        }, {
            // support for inline html within modules
            "test": /\.html$/,
            "use": [{
                "loader": "raw-loader"
            }]
        }, {
            // support for inline text within modules
            "test": /\.txt$/,
            "use": [{
                "loader": "raw-loader"
            }]
        }]
    },
    "plugins": [
        // new CleanWebpackPlugin(["./dist"]),
        new CopyWebpackPlugin([{
            "from": "./config",
            "to": "config"
        }, {
            "from": "./templates",
            "to": "templates"
        }, {
            "from": "./data",
            "to": "data"
        }, {
            "from": "./install.js"
        }, {
            "from": "./uninstall.js"
        }, {
            "from": "./module.json"
        }]),
        new UglifyJSPlugin(),
        new CloudCmsPlugin()
    ]
};
