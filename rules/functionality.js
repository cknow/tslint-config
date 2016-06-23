'use strict';

module.exports = {
    rules: {
        'ban': false,
        'curly': true,
        'forin': true,
        'label-position': true,
        'label-undefined': true,
        'no-arg': true,
        'no-bitwise': false,
        'no-conditional-assignment': true,
        'no-console': [true,
            'debug',
            'info',
            'time',
            'timeEnd',
            'trace'
        ],
        'no-construct': true,
        'no-debugger': true,
        'no-duplicate-key': true,
        'no-duplicate-variable': true,
        'no-empty': true,
        'no-eval': true,
        'no-invalid-this': false,
        'no-null-keyword': false,
        'no-shadowed-variable': true,
        'no-string-literal': true,
        'no-switch-case-fall-through': false,
        'no-unreachable': true,
        'no-unused-expression': true,
        'no-unused-variable': [true, 'react'],
        'no-use-before-declare': true,
        'no-var-keyword': true,
        'radix': true,
        'switch-default': true,
        'triple-equals': true,
        'use-isnan': true,
        'use-strict': [true, 'check-module']
    }
};
