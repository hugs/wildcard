const lexer = require('./lex').lexer
const parser = require('./parse').parser

function run(code) {
	lexed = lexer(code)
	parsed = parser(lexed)
	result = parsed.parse()
	return result
}

module.exports.run = run
