const invalid = [
  '10 ⏹️',		// => Missing ▶️⃣ before "10" at 1:4
	'1⃣0⃣⏹️',		// => Missing ▶️⃣ before "1⃣0⃣" at 1:5
  '⬜⏹️',		 // => Missing ▶️⃣ before "⬜" at 1:2
	'▶️⃣', 			 // => Expected STOP, got null at 1:4
	'⏹️', 			// => Unexpected token: ⏹️ (at 1:1)
	'▶️⃣👋🏽',   	 // => Expected STOP, got null at 1:10
	'▶️⃣👋🏽🌐',   // => Expected STOP, got null at 1:10
	'👋🏽🌐⏹️',   // => Missing ▶️⃣ before "👋🏽🌐" at 1:7
	':say',   	// => Unexpected input: :say at (1:1)
	'say:',   	// => Unexpected input: say: at (1:1)
  'yo', 			// => Unexpected input: yo at (1:1)
  'hello world',
 	"💬 'There are no rules here--we're trying to accomplish something'",
	"▶️⃣'💡'💡'⏹️",
	'⏹️"' + '!' + "שלום עולם" + '"💬',		// Hebrew
	//'🌐👋🏽◀️⃣',
	'⏹️◀️⃣',
	'▶️⃣⏹️◀️⃣',
	'▶️⃣⏹️',
]

module.exports = invalid
