'use strict';

module.exports = {
    rules: {
        'align': [true, 'parameters', 'statements'],
        'arrow-parens': true,
        'class-name': true,
        'comment-format': [true, 'check-space'],
        'interface-name': [true, 'always-prefix'],
        'jsdoc-format': true,
        'new-parens': true,
        'no-angle-bracket-type-assertion': false,
        'no-consecutive-blank-lines': true,
        'no-constructor-vars': false,
        'one-line': [true,
            'check-catch',
            'check-else',
            'check-finally',
            'check-open-brace',
            'check-whitespace'
        ],
        'one-variable-per-declaration': [true, 'ignore-for-loop'],
        'only-arrow-functions': true,
        'ordered-imports': false,
        'quotemark': [true, 'single', 'avoid-escape'],
        'semicolon': [true, 'always'],
        'variable-name': [true,
            'ban-keywords',
            'check-format',
            'allow-pascal-case'
        ],
        'whitespace': [true,
            'check-branch',
            'check-decl',
            'check-operator',
            'check-module',
            'check-separator',
            'check-type',
            'check-typecast'
        ]
    }
};
