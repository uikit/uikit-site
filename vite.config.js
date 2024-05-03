import { sveltekit } from '@sveltejs/kit/vite';

const config = {
    plugins: [sveltekit()],
    server: {
        port: 5174,
    },
};

export default config;
