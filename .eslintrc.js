module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    extends: [
        '@react-native-community',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
    ],
    plugins: ['import', '@typescript-eslint'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'arrow-parens': ['error', 'always'],
        'react-native/no-inline-styles': 'off',
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                pathGroups: [
                    {
                        pattern: 'src/**',
                        group: 'external',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                groups: ['internal', 'external', 'builtin', 'index', 'sibling', 'parent', 'object'],
            },
        ],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
};
