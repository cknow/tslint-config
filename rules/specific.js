'use strict';

module.exports = {
    rules: {
        'adjacent-overload-signatures': true,
        'member-access': true,
        'member-ordering': [true, {
            order: [
                'public-static-field',
                'protected-static-field',
                'private-static-field',
                'public-instance-field',
                'protected-instance-field',
                'private-instance-field',
                'constructor',
                'public-static-method',
                'protected-static-method',
                'private-static-method',
                'public-instance-method',
                'protected-instance-method',
                'private-instance-method'
            ]
        }],
        'no-any': false,
        'no-inferrable-types': false,
        'no-internal-module': true,
        'no-namespace': true,
        'no-reference': true,
        'no-var-requires': true,
        'typedef': [true,
            'call-signature',
            'arrow-call-signature',
            'parameter',
            'arrow-parameter',
            'property-declaration',
            'variable-declaration',
            'member-variable-declaration'
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
        }]
    }
};
