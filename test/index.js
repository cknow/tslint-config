import test from 'ava'
import { Linter, Configuration } from 'tslint'

const runTSLint = text => {
  const linter = new Linter({
    fix: false
  })

  linter.lint(require.resolve('./fixtures/example.ts'), text, Configuration.loadConfigurationFromPath('./'))

  return linter.getResult()
}

test('tslint', t => {
  const result = runTSLint('let foo = \'a\';\n')

  t.is(1, result.errorCount)
  t.is('typedef', result.failures[0].getRuleName())
})
