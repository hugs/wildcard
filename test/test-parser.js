const assert = require('assert')
const run = require('../lib/run')
const valid_programs = require('./valid_programs')
const invalid_programs = require('./invalid_programs')

suite('Valid Programs')
valid_programs.forEach( (program) => {
  test(program, () => {
    assert.doesNotThrow(() => { run(program) })
  })
})

suite('Invalid Programs')
invalid_programs.forEach( (program) => {
  test(program, () => {
    assert.throws(() => { run(program) })
  })
})
