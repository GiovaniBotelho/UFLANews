module.exports = {
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'comma-dangle': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
