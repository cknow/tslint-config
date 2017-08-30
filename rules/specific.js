'use strict';

module.exports = {
    rules: {
        'adjacent-overload-signatures': true,
        'ban-types': false,
        'member-access': [true, 'check-accessor', 'check-constructor'],
        'member-ordering': [true, {
            order: [
                'public-static-field',
                'protected-static-field',
                'private-static-field',
                'public-static-method',
                'protected-static-method',
                'private-static-method',
                'public-instance-field',
                'protected-instance-field',
                'private-instance-field',
                'public-constructor',
                'protected-constructor',
                'private-constructor',
                'public-instance-method',
                'protected-instance-method',
                'private-instance-method'
            ]
        }],
        'no-any': false,
        'no-empty-interface': true,
        'no-import-side-effect': false,
        'no-inferrable-types': false,
        'no-internal-module': true,
        'no-magic-numbers': false,
        'no-namespace': true,
        'no-non-null-assertion': true,
        'no-parameter-reassignment': true,
        'no-reference': true,
        'no-unnecessary-type-assertion': true,
        'no-var-requires': true,
        'only-arrow-functions': [true, 'allow-declarations', 'allow-named-functions'],
        'prefer-for-of': true,
        'promise-function-async': true,
        'typedef': [true,
            'call-signature',
            'arrow-call-signature',
            'parameter',
            'arrow-parameter',
            'property-declaration',
            'member-variable-declaration',
            'variable-declaration',
            'object-destructuring',
            'array-destructuring'
        ],
        'typedef-whitespace': [true, {
            'call-signature': 'nospace',
            'index-signature': 'nospace',
            'parameter': 'nospace',
            'property-declaration': 'nospace',
            'variable-declaration': 'nospace'
        }, {
            'call-signature': 'onespace',
            'index-signature': 'onespace',
            'parameter': 'onespace',
            'property-declaration': 'onespace',
            'variable-declaration': 'onespace'
        }],
        'unified-signatures': true
    }
};
