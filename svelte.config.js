import adapter from '@sveltejs/adapter-static';

process.env.PUBLIC_CACHE = Date.now().toString(36);

const config = {
    kit: {
        adapter: adapter(),
    },
};

export default config;
