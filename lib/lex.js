const Lexer = require('perplex').default

const lexer = function(code) {
	const lexer = new Lexer(code)
		// Level 1 - Basics
    .token('START', /^(:start:)|^(\u{25B6}\u{FE0F}\u{20E3}?)/u)
    .token('START_RTL', /^(:start:)|^(\u{25C0}\u{FE0F}\u{20E3}?)/u)
    .token('STOP', /^(:stop:)|^(\u{23F9}\u{FE0F})/u)
    .token('SPACE', /\u{2B1C}+/u)
		.token('WS', /\s+/, true)

		// Level 2 - Numbers
    .token('NUMBER', /(\d\u{FE0F}?\u{20E3}?)+/u)

  	// Level 3 - Hello World
    .token('SAY', /^(:say:)|^(\u{1F4AC})/u)
    .token('HELLO', /^(:hello:)|^(\u{1F44B}\u{1F3FD}?)/u)
    .token('WORLD', /^(:world:)|^(\u{1F310})/u)
		.token('STRING', /"([^"\\]*(\\.[^"\\]*)*)"|\'([^\'\\]*(\\.[^\'\\]*)*)\'/)
	return lexer
}

module.exports.lexer = lexer
