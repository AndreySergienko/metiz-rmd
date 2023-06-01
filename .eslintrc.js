module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },

  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],

  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': 'warn',
    quotes: ['error', 'single'],
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true
      }
    ]
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
