var tokenTypes = [
    ["NUMBER",    /^\d+/ ],
    ["ADD",       /^\+/  ],
    ["SUB",       /^\-/  ],
    ["MUL",       /^\*/  ],
    ["DIV",       /^\//  ],
    ["LPAREN",    /^\(/  ],
    ["RPAREN",    /^\)/  ]
  ];

function Calculator (inputString) {
	this.tokenStream = this.lexer(inputString);
}

var testString = '1+(2*3)+4';

Calculator.prototype.lexer = function (str) {
    var tokens = [];

	//for (var t=0; t< tokenTypes.length; t++) {
	//	str.match(tokenTypes[t][1]);

    // BASE CASE 
    if (str.length === 0) {
    	return;
    } else {
      var temp;
      var token;

      for (var t=0; t< tokenTypes.length; t++) {
	     if (str.match(tokenTypes[t][1])) {
            temp = tokenTypes[t][1].exec(str);
            token = tokenTypes[t][0];
	        break;
	     }
      }
        // console.log('output', {name: token, value: temp[0]})
      tokens.push({name: token, value: temp[0]})
      
      var tokenIndex = temp['index'];
      var tokenLength = temp[0].length;
      console.log('before', str)
      str.replace(temp[0], '')
      console.log('after', str)
      //var elementsFromStr = str.slice(tokenIndex, tokenIndex + tokenLength + 1);
      
      //str = str.slice(temp[1]+1);
      //this.lexer(str)
      
    }
};

var calc = new Calculator('1+(2*3)+4');
calc.lexer('1+(2*3)+4');
    
    
//var numReg =  /^\d+/
//console.log(numReg.exec(testString))

/*
var testString = '1+(2*3)+4';
The above string should return the following array....

[ {name: "NUMBER",     value: "1" },
  {name: "ADD",     value: "+" },
  {name: "LPAREN",     value: "(" },
  {name: "NUMBER",     value: "2" },
  {name: "MUL",     value: "*" },
  {name: "NUMBER",     value: "3" },
  {name: "RPAREN",     value: "" },
  {name: "ADD",     value: "+" },
  {name: "NUMBER",     value: "4" }]
*/