'use strict';

module.exports = {
    rules: {
        'adjacent-overload-signatures': true,
        'ban-comma-operator': true,
        'ban-ts-ignore': false,
        'ban-types': [
            true,
            ['Object', 'Avoid using the `Object` type. Did you mean `object`?'],
            ['Function', 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'],
            ['Boolean', 'Avoid using the `Boolean` type. Did you mean `boolean`?'],
            ['Number', 'Avoid using the `Number` type. Did you mean `number`?'],
            ['String', 'Avoid using the `String` type. Did you mean `string`?'],
            ['Symbol', 'Avoid using the `Symbol` type. Did you mean `symbol`?']
        ],
        'member-access': [true, 'no-public'],
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
        'no-import-side-effect': true,
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
        'promise-function-async': [
            true,
            'check-function-declaration',
            'check-function-expression',
            'check-arrow-function',
            'check-method-declaration'
        ],
        'typedef': [
            true,
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
