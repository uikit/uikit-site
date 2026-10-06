import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

const config = {
    plugins: [sveltekit({
        adapter: adapter()
    })],
    server: {
        port: 5174,
    },
};

export default config;
