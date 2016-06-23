'use strict';

module.exports = {
    rules: {
        'eofline': true,
        'indent': [true, 'spaces'],
        'linebreak-style': [true, 'LF'],
        'max-line-length': [true, 120],
        'no-default-export': false,
        'no-mergeable-namespace': true,
        'no-require-imports': false,
        'no-trailing-whitespace': true,
        'object-literal-sort-keys': false,
        'trailing-comma': [true, {
            singleline: 'never',
            multiline: 'never'
        }]
    }
};
