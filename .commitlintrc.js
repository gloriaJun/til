module.exports = {
    extends: [
      '@commitlint/config-conventional',
      '@commitlint/config-lerna-scopes',
    ],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'build',
          'ci',
          'chore',
          'docs',
          'feat',
          'fix',
          'perf',
          'refactor',
          'revert',
          'style',
          'test',
        ],
      ],
      'type-case': [2, 'always', 'lowerCase'],
      'type-empty': [2, 'never'],
      'scope-case': [2, 'always', 'lowerCase'],
      'subject-empty': [2, 'never'],
      'header-max-length': [2, 'always', 100],
    },
  };