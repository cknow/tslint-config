'use strict';

module.exports = {
    rules: {
        'align': [true, 'parameters', 'statements'],
        'array-type': [true, 'array'],
        'arrow-parens': [true, 'ban-single-arg-parens'],
        'arrow-return-shorthand': [true, 'multiline'],
        'binary-expression-operand-order': true,
        'callable-types': true,
        'class-name': true,
        'comment-format': [true, 'check-space', 'check-uppercase', 'allow-trailing-lowercase'],
        'comment-type': [true, 'singleline', 'multiline', 'doc', 'directive'],
        'completed-docs': [true, 'functions', 'methods', 'properties'],
        'encoding': true,
        'file-header': false,
        'file-name-casing': [true, 'kebab-case'],
        'import-spacing': true,
        'increment-decrement': [true, 'allow-post'],
        'interface-name': [true, 'never-prefix'],
        'interface-over-type-literal': true,
        'jsdoc-format': [true, 'check-multiline-start'],
        'match-default-export-name': true,
        'newline-before-return': true,
        'newline-per-chained-call': false,
        'new-parens': true,
        'no-angle-bracket-type-assertion': true,
        'no-boolean-literal-compare': true,
        'no-consecutive-blank-lines': true,
        'no-irregular-whitespace': true,
        'no-parameter-properties': false,
        'no-redundant-jsdoc': true,
        'no-reference-import': true,
        'no-trailing-whitespace': true,
        'no-unnecessary-callback-wrapper': true,
        'no-unnecessary-initializer': true,
        'no-unnecessary-qualifier': true,
        'number-literal-format': true,
        'object-literal-key-quotes': [true, 'consistent-as-needed'],
        'object-literal-shorthand': true,
        'one-line': [
            true,
            'check-catch',
            'check-else',
            'check-finally',
            'check-open-brace',
            'check-whitespace'
        ],
        'one-variable-per-declaration': [true, 'ignore-for-loop'],
        'ordered-imports': [true, {
            'import-sources-order': 'case-insensitive',
            'grouped-imports': true,
            'named-imports-order': 'case-insensitive',
            'module-source-path': 'full'
        }],
        'prefer-function-over-method': [true, 'allow-public', 'allow-protected'],
        'prefer-method-signature': true,
        'prefer-switch': true,
        'prefer-template': true,
        'prefer-while': true,
        'quotemark': [true, 'single', 'avoid-escape', 'avoid-template'],
        'return-undefined': true,
        'semicolon': [true, 'always', 'ignore-interfaces'],
        'space-before-function-paren': [true, {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
            method: 'never',
            constructor: 'never'
        }],
        'space-within-parens': 0,
        'switch-final-break': [true, 'always'],
        'type-literal-delimiter': true,
        'unnecessary-bind': true,
        'unnecessary-else': [true, {
            'allow-else-if': true
        }],
        'variable-name': [
            true,
            'ban-keywords',
            'check-format',
            'allow-leading-underscore'
        ],
        'whitespace': [
            true,
            'check-branch',
            'check-decl',
            'check-module',
            'check-operator',
            'check-postbrace',
            'check-preblock',
            'check-rest-spread',
            'check-separator',
            'check-type',
            'check-typecast',
            'check-type-operator'
        ]
    }
};
