const Parser = require('pratt').Parser

const START = String.fromCodePoint(0x25B6,0xFE0F,0x20E3)
const STOP = String.fromCodePoint(0x23F9,0xFE0F)

const parser = function(lexed_code) {
	const parser = new Parser(lexed_code)
		.builder()

		// Level 1 - Basics
		.nud('START', 20, (t, bp) => {
			const expr = parser.parse(bp)
			lexed_code.expect('STOP')
			return START + expr + STOP
		})
		.led('START_RTL', 20, (left, t, bp) => {
      return left + t.match
		})
		.nud('STOP', 20, (t, bp) => {
			const expr = parser.parse(bp)
			if (expr.indexOf('◀️⃣') >= 0) {
      	return STOP + expr
			}
			const pos = t.strpos()
      if (expr == '') {
				throw new Error('Missing ▶️⃣ or ◀️⃣ at (' + pos.start.line + ':' + pos.start.column + ')')
			} else {
				throw new Error('Missing ◀️⃣ at (' + pos.start.line + ':' + pos.start.column +')')
			}

		})
		.nud('SPACE', 100, (t, bp) => t.match)
    .nud(null, 100, (t, bp) => '')
    .bp('STOP', 0)
    .led('STOP', 5, (left, t, bp) => {
			const pos = t.strpos()
      throw new Error('Missing ▶️⃣ before "' + left + '"' + ' at ' + pos.start.line + ':' + pos.start.column)
		})

		// Level 2 - Numbers
		.nud('NUMBER', 100, (t, bp) => t.match )
    .led('NUMBER', 100, (left, t, bp) => left + '' + t.match)

  	// Level 3 - Hello World
		.nud('SAY', 100, (t, bp) => t.match )
		.nud('HELLO', 100, (t, bp) => t.match )
		.nud('WORLD', 100, (t, bp) => t.match )
	  .nud('STRING', 100, (t, bp) => t.match )
    .led('SAY', 100, (left, t, bp) => left + '' + t.match)
    .led('HELLO', 100, (left, t, bp) => left + '' + t.match)
    .led('WORLD', 100, (left, t, bp) => left + '' + t.match)
    .led('STRING', 100, (left, t, bp) => left + '' +  t.match)

		.build()
  return parser
}

module.exports.parser = parser
