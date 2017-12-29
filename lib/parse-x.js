const Parser = require('pratt').Parser
const util = require('util')

const PARSE_LEVELS = {'raw':0, 'transpile':1, 'AST':2}
const PARSE_LEVEL = 0

const START = String.fromCodePoint(0x25B6,0xFE0F,0x20E3)
const STOP = String.fromCodePoint(0x23F9,0xFE0F)

const FUNCTION_PARAMETERS = ['STRING', 'NUMBER']

var TOKENS = {
  'HELLO': 'hello',
  'WORLD': 'world',
  'SAY': 'say',
}

function asPlainNumber(source) {
  var forDeletion = ['\u{20E3}', '\u{FE0F}']
  var number = source.toString().split('')
  number = number.filter(item => !forDeletion.includes(item))
  number = parseInt(number.join(''))
  return number
}

function transpileFunction(token, t, left) {
  if (typeof(left) == 'undefined') { left = '' }
  let next = t.lexer.peek()
  let functionName = TOKENS[token]
  if (FUNCTION_PARAMETERS.includes(next.type)) {
    var match = next.match
    if (next.type == 'NUMBER') {
      match = asPlainNumber(match)
    }
    t.lexer.next()
    return left + '\n' + functionName + '(' + match +')'
  }
  return left + '\n' + functionName + '()'
}

const parse = function(lexed_code) {
  const parser = new Parser(lexed_code)
    .builder()

    // Level 1 - Basics
    .nud('START', 20, (t, bp) => {
      const expr = parser.parse(bp)
      lexed_code.expect('STOP')
      return START + expr + '\n' + STOP
    })
    .led('START_RTL', 20, (left, t, bp) => {
      return left + t.match
    })
    .nud('STOP', 20, (t, bp) => {
      const expr = parser.parse(bp)
      if (expr.indexOf('◀️') >= 0) {
        return STOP + expr
      }

      const pos = t.strpos()
      if (expr == '') {
        throw new Error('Missing ▶️ or ◀️ at (' + pos.start.line + ':' + pos.start.column + ')')
      } else {
        throw new Error('Missing ◀️ at (' + pos.start.line + ':' + pos.start.column +')')
      }

    })
    .nud('SPACE', 100, (t, bp) => t.match)
    .nud(null, 100, (t, bp) => '')
    .bp('STOP', 0)
    .led('STOP', 5, (left, t, bp) => {
      const pos = t.strpos()
      throw new Error('Missing ▶️ before "' + left + '"' + ' at ' + pos.start.line + ':' + pos.start.column)
    })

    // Level 2 - Numbers
    .nud('NUMBER', 100, (t, bp) => {
      let number = asPlainNumber(t.match)
      return number
    })
    .led('NUMBER', 100, (left, t, bp) => {
      let number = asPlainNumber(t.match)
      return left + '\n' +  number
    })

    // Level 3 - Hello World
    .nud('SAY', 100, (t, bp) => {
      return transpileFunction('SAY', t)
    })
    .nud('HELLO', 100, (t, bp) => {
      return transpileFunction('HELLO', t)
    })
    .nud('WORLD', 100, (t, bp) => {
      return transpileFunction('WORLD', t)
    })
    .nud('STRING', 100, (t, bp) => {
      return '\n' + t.match
    })
    .led('SAY', 100, (left, t, bp) => {
      return transpileFunction('SAY', t, left)
    })
    .led('HELLO', 100, (left, t, bp) => {
      return transpileFunction('HELLO', t, left)
    })
    .led('WORLD', 100, (left, t, bp) => {
      return transpileFunction('WORLD', t, left)
    })
    .led('STRING', 100, (left, t, bp) => {
      return left + '\n' +  t.match
    })
    .build()
  return parser.parse()
}

module.exports = parse
