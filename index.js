module.exports = {
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module'
    },
    env: {
        es6: true,
        node: true,
        browser: true
    },
    extends: 'eslint:recommended',
    rules: {
        'no-async-promise-executor': [1],
        'no-console': 0, // To revise in future,
        'no-extra-parens': [2, 'all', {
            nestedBinaryExpressions: false,
            ignoreJSX: 'all',
            enforceForArrowConditionals: false
        }],
        'no-template-curly-in-string': 2,
        'require-atomic-updates': 2,

        'accessor-pairs': 1
    }
}
