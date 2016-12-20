
const externals = {
    vue: 'Vue',
    uikit: 'UIkit',
    jquery: 'jQuery'
};

const loaders = [
    {loader: 'vue', test: /\.vue$/},
    {loader: 'babel', test: /\.js$/, exclude: /node_modules/},
    {loader: 'json', test: /\.json/}
];

module.exports = [

    {
        entry: './app/main',
        output: {
            filename: './app/main.min.js'
        },
        externals,
        module: {
            loaders
        }
    },

    {
        entry: './docs/app/main',
        output: {
            filename: './docs/app/main.min.js'
        },
        externals,
        module: {
            loaders
        }
    }

];
