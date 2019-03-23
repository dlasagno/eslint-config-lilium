module.exports = {
  extends: [
    './rules'
  ].map(require.resolve),

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },

  env: {
    es6: true
  }
}
