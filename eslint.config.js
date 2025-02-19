module.exports = [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    plugins: {
      'react': require('eslint-plugin-react'),
      'react-native': require('eslint-plugin-react-native'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      'import': require('eslint-plugin-import'),
      'jsx-a11y': require('eslint-plugin-jsx-a11y'),
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'react-native/no-raw-text': 'off',
      'react-native/no-color-literals': 'off',
      'react-native/no-inline-styles': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
    ignores: ['node_modules/', 'dist/', 'build/'],
  },
];
