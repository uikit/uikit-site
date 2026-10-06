import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
    PUBLIC_CACHE: {
        public: true,
        static: true,
        schema: (value) => value || Date.now().toString(36),
    },
});
