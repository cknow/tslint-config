'use strict';

import test from 'ava';
import TSLint from 'tslint';

const runTSLint = text => {
    const linter = new TSLint('example.ts', text, {
        configuration: TSLint.loadConfigurationFromPath('../')
    });

    return linter.lint();
};

test('tslint', t => {
    const result = runTSLint('let foo = \'a\';\nconsole.log(foo);\n');

    t.is(1, result.failureCount);
    t.is('typedef', result.failures[0].ruleName);
});
