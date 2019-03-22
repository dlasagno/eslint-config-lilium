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
    // Possible errors
    'no-async-promise-executor': ['warn'],
    'no-console': 'off', // To revise in future,
    'no-extra-parens': ['error', 'all', {
        nestedBinaryExpressions: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false
    }],
    'no-template-curly-in-string': 'error',
    'require-atomic-updates': 'error',

    // Best practices
    'accessor-pairs': 'warn',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-method-use-this': 'warn',
    'consistent-return': 'error',
    'curly': ['error', 'multi', 'consistent'],
    'dot-location': ['error', 'property'],
    'dot-notation': 'warn',
    'eqeqeq': ['error', 'smart'],
    'no-alert': 'warn',
    'no-caller': 'warn',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-magic-numbers': ['error', { ignore: [-1, 0, 1, 2] }],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-multi-str': 'error',
    'no-octal-escape': 'error',
    'no-redeclare': ['error', { builtinGlobals: true }],
    'no-return-assign': 'error',
    'no-return-await': 'warn',
    'no-script-url': 'error',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'warn',
    'no-unused-labels': 'warn',
    'no-useless-call': 'warn',
    'no-useless-catch': 'warn',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'yoda': ['error', 'never', { onlyEquality: true }]
    
  }
}
