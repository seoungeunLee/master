module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
<<<<<<< HEAD
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
=======
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
>>>>>>> b6b139cdcbb1bd4e7e386c24d29cf20e0b3389a6
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
<<<<<<< HEAD
    project: ['./tsconfig.json'],
  },
  plugins: ['react'],
  rules: {},
};
=======
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
  },
};
>>>>>>> b6b139cdcbb1bd4e7e386c24d29cf20e0b3389a6
