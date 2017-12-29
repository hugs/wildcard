const lex = require('../lib/lex')
const parse = require('../lib/parse-x')

function run(code = '') {
  lexed = lex(code)
  parsed = parse(lexed)
  return parsed
}


//code = '👋🏽🌐'
//code = '🌐👋🏽'
//code = '🌐'
//code = '👋🏽'
//code = '▶️👋🏽"Hello World"🌐⏹️'
//code = '▶️🌐"world"👋🏽"hello"⏹️'
//code = '▶️🌐"world"👋🏽"hello"⏹️'
//code = '▶️👋🏽"hello"🌐"world"⏹️'
//code = '▶️"Hello World"🌐⏹️'
//code = '▶️👋🏽🌐"Hello World"⏹️'
//code = '▶️🌐"Hello World"⏹️'
//code = '▶️👋🏽🌐⏹️'
//code = '▶️🌐👋🏽⏹️'
//code = '▶️👋🏽1️⃣2️⃣34🌐⏹️'
code = '▶️👋🏽1️⃣2️⃣3️⃣4️⃣🌐"world"⏹️'
//code = '▶️👋🏽1️⃣2️⃣2️⃣2️⃣2️⃣2️⃣"Hello World"🌐2️⃣2️⃣535⏹️'
//code = '💬"Hello, World!"'
//code = '2️⃣2️⃣2️⃣💬"Hello, World!"2️⃣2️⃣2️⃣'

try {
  result = run(code)
  console.log(result)
} catch (e) {
  console.log('\n  Code: ' + code)
  console.log('  ' + e)
  console.log()
}
