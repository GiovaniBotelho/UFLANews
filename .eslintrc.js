module.exports = {
  plugins: ['react', 'prettier', 'airbnb'],
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
