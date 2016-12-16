
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
        entry: './docs/app/main',
        output: {
            filename: './docs/app/main.min.js'
        },
        externals,
        module: {
            loaders
        }
    },

    {
        entry: './js/site',
        output: {
            filename: './js/site.min.js'
        },
        externals,
        module: {
            loaders
        }
    }

];
