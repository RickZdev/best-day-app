module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 100],
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation
        'style', // Formatting, missing semi colons, etc; no code change
        'refactor', // Refactoring production code
        'test', // Adding tests, refactoring test; no production code change
        'chore', // Updating build tasks, package manager configs, etc; no production code change
        'perf', // Improving performance
        'revert', // Reverting a previous commit
      ],
    ],
    'scope-case': [2, 'always', ['lower-case']],
    'subject-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
  },
};
