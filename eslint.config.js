import eslintJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default [
    eslintJs.configs.recommended,
    eslintConfigPrettier,
    ...eslintPluginSvelte.configs['flat/recommended'],
    {
        ignores: [
            '.DS_Store',
            'build/',
            '.svelte-kit/',
            'static/assets/uikit',
            'static/migrate.min.js',
        ],
    },
    {
        files: ['**/*.svelte'],
        rules: {
            'svelte/no-at-html-tags': 'off',
        },
    },
    {
        rules: {
            'no-unused-vars': ['error', { caughtErrors: 'none' }],
        },
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                UIkit: true,
                ClipboardJS: true,
                ...globals.browser,
                ...globals.node,
            },
        },
    },
];
