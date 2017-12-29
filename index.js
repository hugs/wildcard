const lex = require('./lib/lex')
const parse = require('./lib/parse')
const run = require('./lib/run')

module.exports = {
  'lex'  : lex,
  'parse' : parse,
  'run'    : run
}
