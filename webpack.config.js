const {VueLoaderPlugin} = require('vue-loader');

module.exports = {

    mode: 'production',

    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'uikit': 'UIkit',
        'uikit-util': 'UIkit.util',
        'he': 'he'
    },

    entry: {
        'app/main': './app/main',
        'docs/app/main': './docs/app/main'
    },

    output: {
        path: __dirname,
        filename: './[name].min.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {
                            targets: {
                                safari: '12'
                            }
                        }]]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]

};
