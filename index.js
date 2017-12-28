const lexer = require('./lib/lex').lexer
const parser = require('./lib/parse').parser
const run = require('./lib/interpret').run

module.exports = {
  'lexer'  : lexer,
  'parser' : parser,
  'run'    : run
}
