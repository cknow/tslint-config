'use strict';

module.exports = {
    rules: {
        'cyclomatic-complexity': [true, 20],
        'deprecation': true,
        'eofline': true,
        'indent': [true, 'spaces'],
        'linebreak-style': [true, 'LF'],
        'max-classes-per-file': [true, 1],
        'max-file-line-count': [true, 300],
        'max-line-length': [true, 120],
        'no-default-export': false,
        'no-duplicate-imports': true,
        'no-mergeable-namespace': true,
        'no-require-imports': true,
        'object-literal-sort-keys': false,
        'prefer-const': [true, {
            destructuring: 'any'
        }],
        'prefer-readonly': [true, 'only-inline-lambdas'],
        'trailing-comma': [true, {
            multiline: 'never',
            singleline: 'never',
            esSpecCompliant: true
        }]
    }
};
