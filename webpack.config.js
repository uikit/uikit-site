
const externals = {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'uikit': 'UIkit',
    'jquery': 'jQuery',
    'he': 'he'
};

const loaders = [
    {loader: 'vue-loader', test: /\.vue$/},
    {loader: 'buble-loader', test: /\.js$/, exclude: /node_modules/},
    {loader: 'json-loader', test: /\.json/}
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
