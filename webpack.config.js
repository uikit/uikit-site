module.exports = [

    {
        entry: './docs/app/main',
        output: {
            filename: './docs/app/main.min.js'
        },
        externals: {
            vue: 'Vue',
            uikit: 'UIkit',
            jquery: 'jQuery'
        },
        module: {
            loaders: [
                {loader: 'vue', test: /\.vue$/},
                {loader: 'babel', test: /\.js$/, exclude: /node_modules/},
                {loader: 'json', test: /\.json/}
            ]
        }
    }

];
