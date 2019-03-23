module.exports = {
  rules: {
    'no-async-promise-executor': ['warn'],
    'no-console': 'off', // To revise in future
    'no-extra-parens': ['error', 'all', {
        nestedBinaryExpressions: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false
    }],
    'no-template-curly-in-string': 'error',
    'require-atomic-updates': 'error'
  }
}