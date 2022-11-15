import adapter from '@sveltejs/adapter-static';

const config = {
    kit: {
        adapter: adapter(),
        trailingSlash: 'never',
    },
};

export default config;
