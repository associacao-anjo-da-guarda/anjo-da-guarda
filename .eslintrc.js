module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    // add your custom rules here
    rules: {
        'vue/multiline-html-element-content-newline': [
            'error',
            {
                ignoreWhenEmpty: true,
                allowEmptyLines: true
            }
        ],
        'vue/html-indent': ['error', 4],
        indent: ['error', 4],
        semi: ['error', 'never', {
            beforeStatementContinuationChars: 'never'
        }],
        'no-console': process.env.NODE_ENV === 'production' ? 'on' : 'off',
        'vue/no-v-html': 'off'
        // "space-before-function-paren": ["error", "never"],
    }
}
