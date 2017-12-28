
// Level 1 - Basics
// Level 2 - Numbers
// Level 3 - Hello World

// Level 4 - Basic Robot Control
// Level 5 - Function Creation
// Level 6 - Basic Math
// Level 7 - More Robot Control
// Level 8 - Code Comments
// Level 9 - Loops and Conditionals
// Level 10 - Misc
// Level 34 - Web Automation

let symbols = {
  // Level 1 - Basics
  '▶️': {name : 'Black Right-Pointing Triangle',
        id: 'start',
        alias: ['play','go','triangle_right'],
        codePoint :'0x25B6',
        emoji : [[0x25B6,0xFE0F],
                 [0x25B6,0xFE0F,0x20E3]]},

  '◀️': {name : 'Black Left-Pointing Triangle',
        // "play" for right-to-left languages
        id: 'start',
        alias: ['play','go','triangle_left'],
        codePoint :'0x25C0',
        emoji : [[0x25C0,0xFE0F],
                 [0x25C0,0xFE0F,0x20E3]]},

  '⏹️': {name : 'Black Square for Stop',
        id: 'stop',
        alias: ['end','square'],
        codePoint :'0x23F9',
        emoji : [[0x23F9],
                 [0x23F9,0xFE0F]]},

  '⬜': {name : 'White Large Square',
        id: 'space',
        codePoint :'0x2B1C',
        emoji : [0x2B1C]},


  // Level 2 - Numbers
  '0⃣': {name : 'Digit Zero',
        id : 'zero',
        codePoint :'0x30',
        emoji : [[0x30,0x20E3],
                 [0x30,0xFE0F,0x20E3]]},

  '1⃣': {name : 'Digit One',
        id : 'one',
        codePoint :'0x31',
        emoji : [[0x31,0x20E3],
                 [0x31,0xFE0F,0x20E3]]},

  '2⃣': {name : 'Digit Two',
        id : 'two',
        codePoint :'0x32',
        emoji : [[0x32,0x20E3],
                 [0x32,0xFE0F,0x20E3]]},

  '3⃣': {name : 'Digit Three',
        id : 'three',
        codePoint :'0x33',
        emoji : [[0x33,0x20E3],
                 [0x33,0xFE0F,0x20E3]]},

  '4⃣': {name : 'Digit Four',
        id : 'four',
        codePoint :'0x34',
        emoji : [[0x34,0x20E3],
                 [0x34,0xFE0F,0x20E3]]},

  '5⃣': {name : 'Digit Five',
        id : 'five',
        codePoint :'0x35',
        emoji : [[0x35,0x20E3],
                 [0x35,0xFE0F,0x20E3]]},

  '6⃣': {name : 'Digit Six',
        id : 'six',
        codePoint :'0x36',
        emoji : [[0x36,0x20E3],
                 [0x36,0xFE0F,0x20E3]]},

  '7⃣': {name : 'Digit Seven',
        id : 'seven',
        codePoint :'0x37',
        emoji : [[0x37,0x20E3],
                 [0x37,0xFE0F,0x20E3]]},

  '8⃣': {name : 'Digit Eight',
        id : 'eight',
        codePoint :'0x38',
        emoji : [[0x38,0x20E3],
                 [0x38,0xFE0F,0x20E3]]},

  '9⃣': {name : 'Digit Nine',
        id : 'nine',
        codePoint :'0x39',
        emoji : [[0x39,0x20E3],
                 [0x39,0xFE0F,0x20E3]]},


  // Level 3 - Hello World
  '💬': {name : 'Speech Balloon',
        id: 'say',
        alias: ['print'],
        codePoint :'0x1F4AC',
        emoji : [0x1F4AC]},

  '👋🏽': {name : 'Waving Hand Sign',
        id: 'hello',
        alias: ['wave','bye','goodbye'],
        codePoint :'0x1F44B',
        emoji : [[0x1F44B,0x1F3FD],
                 [0x1F44B]]},

  '🌐': {name : 'Globe With Meridians',
        id: 'world',
        alias: ['globe','earth'],
        codePoint :'0x1F310',
        emoji : [0x1F310]},


  // Level 4 - Basic Robot Control
  '⬆️⃣': {name : 'Upwards Black Arrow',
        id: 'arrow_up',
        alias: ['forward'],
        codePoint :'0x2B06',
        emoji : [[0x2B06,0xFE0F,0x20E3],
                 [0x2B06,0xFE0F]]},

  '⬇️⃣': {name : 'Downwards Black Arrow',
        id: 'arrow_down',
        alias: ['back','backwards','reverse'],
        codePoint :'0x2B07',
        emoji : [[0x2B07,0xFE0F,0x20E3],
                 [0x2B07,0xFE0F]]},

  '↩️⃣': {name : 'Leftwards Arrow With Hook',
        id : 'arrow_clockwise',
        alias: ['turn_right','right_turn'],
        codePoint :'0x21A9',
        emoji : [[0x21A9,0xFE0F,0x20E3],
                 [0x21A9,0xFE0F]]},
        // Alt: "clockwise open circle arrow (U+21BB)"
        // code: 0x21bb
        // glyph: ↻

  '↪️⃣': {name : 'Rightwards Arrow With Hook',
        id : 'arrow_anticlockwise',
        alias: ['turn_left','left_turn'],
        codePoint :'0x21AA',
        emoji : [[0x21AA,0xFE0F,0x20E3],
                 [0x21AA,0xFE0F]]},
        // Alt: anticlockwise open circle arrow
        // code: 0x21ba
        // glyph: ↺


  // Level 5 - Function Creation
  '⏺': {name : 'Black Circle for Record',
        id: 'def',
        alias: ['function','to','on','circle'],
        codePoint :'0x23FA',
        emoji : [0x23FA,0xFE0F]},


  // Level 6 - Basic Math
  '➕': {name : 'Heavy Plus Sign',
        id : 'plus',
        alias: ['add'],
        codePoint :'0x2795',
        emoji : [0x2795]},

  '➖': {name : 'Heavy Minus Sign',
        id : 'minus',
        alias: ['subtract'],
        codePoint :'0x2796',
        emoji : [0x2796]},

  '✖️⃣': {name : 'Heavy Multiplication X',
        id : 'multiply',
        alias: ['times'],
        codePoint :'0x2716',
        emoji : [[0x2716,0xFE0F,0x20E3],
                 [0x2716,0xFE0F]]},

  '➗': {name : 'Heavy Division Sign',
        id : 'divide',
        alias: ['divided_by'],
        codePoint :'0x2797',
        emoji : [0x2797]},


  // Level 7 - More Robot Control
  '🖊': {name : 'Lower Left Ballpoint Pen',
        id : 'pen',
        codePoint :'0x1F58A',
        emoji : [0x1F58A,0xFE0F]},

  '🔼': {name : 'Up-Pointing Small Red Triangle',
        id : 'triangle_up',
        alias: ['high','up'],
        codePoint :'0x1F53C',
        emoji : [0x1F53C]},

  '🔽': {name : 'Down-Pointing Small Red Triangle',
        id : 'triangle_down',
        alias: ['low','down'],
        codePoint :'0x1F53D',
        emoji : [0x1F53D]},

  '➡️⃣': {name : 'Black Rightwards Arrow',
        id : 'arrow_right',
        alias: ['right'],
        codePoint :'0x27A1',
        emoji : [[0x27A1,0xFE0F,0x20E3],
                 [0x27A1,0xFE0F]]},

  '⬅️⃣': { name : 'Leftwards Black Arrow',
        id : 'arrow_left',
        alias: ['left'],
        codePoint :'0x2B05',
        emoji : [[0x2B05,0xFE0F,0x20E3],
                 [0x2B05,0xFE0F]]},


  // Level 8 - Code Comments
  '#⃣': {name : 'Number Sign',
        id : 'number_sign',
        codePoint :'0x23',
        emoji : [[0x23,0x20E3],
                 [0x23,0xFE0F,0x20E3]]},


  // Level 9 - Loops and Conditionals
  '👍🏽': {name : 'Thumbs Up Sign',
        id : 'thumbs_up_sign',
        alias: ['true'],
        codePoint :'0x1F44D',
        emoji : [0x1F44D,0x1F3FD]},

  '👎🏽': {name : 'Thumbs Down Sign',
        id : 'thumbs_down_sign',
        alias: ['false'],
        codePoint :'0x1F44E',
        emoji : [0x1F44E,0x1F3FD]},

  '🤷🏽': {name : 'Shrug',
        id : 'shrug',
        alias: ['if'],
        codePoint :'0x1F937',
        emoji : [0x1F937,0x1F3FD]},

  '🔁': {name : 'Clockwise Rightwards and Leftwards Open Circle Arrows',
        id : 'repeat',
        alias: ['loop'],
        codePoint :'0x1F501',
        emoji : [0x1F501]},


  // Level 10 - Misc
  '📌': {name : 'Pushpin',
        id : 'pushpin',
        codePoint :'0x1F4CC',
        emoji : [0x1F4CC]},

  '⏱': {name : 'Stopwatch',
        id : 'stopwatch',
        codePoint :'0x23F1',
        emoji : [0x23F1]},

  '💡': {name : 'Electric Light Bulb',
        id : 'light_bulb',
        codePoint :'0x1F4A1',
        emoji : [0x1F4A1]},

  '💃🏽': {name : 'Dancer',
        id : 'dancer',
        alias: ['dance'],
        codePoint :'0x1F483',
        emoji : [0x1F483,0x1F3FD]},


  // Level 34 - Web Automation
  '🔗': {name : 'Link Symbol',
        id : 'link',
        alias: ['url'],
        codePoint :'0x1F517',
        emoji : [0x1F517]},

  '✍🏽': {name : 'Writing Hand',
        id : 'hand_writing',
        codePoint :'0x270D',
        emoji : [0x270D,0x1F3FD]},

  '👆🏽': {name : 'White Up Pointing Backhand Index',
        id : 'hand_pointing_up',
        codePoint :'0x1F446',
        emoji : [0x1F446,0x1F3FD]},

  '📷': {name : 'Camera',
        id : 'camera',
        alias: ['screenshot'],
        codePoint :'0x1F4f7',
        emoji : [0x1F4f7]},

}

module.exports = symbols
