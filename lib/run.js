const lex = require('./lex')
const parse = require('./parse')

function run(code) {
  lexed = lex(code)
  result = parse(lexed)
  return result
}

module.exports = run
