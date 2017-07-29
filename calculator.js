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

	//for (var t=0; t< tokenTypes.length; t++) {
	//	str.match(tokenTypes[t][1]);

    // BASE CASE 
    if (str.length === 0) {
    	return;
    } else {
      var temp;  
      for (var t=0; t< tokenTypes.length; t++) {
	     if (str.match(tokenTypes[t][1])) {
	         temp = tokenTypes[t][1].exec(str);
	         console.log(temp);
	         break;
	     }
      }
      //str = str.slice(temp[1]+1);
      //this.lexer(str)
      
    }
};

var calc = new Calculator()
calc.lexer('1+(2*3)+4');
    
    
//var numReg =  /^\d+/
//console.log(numReg.exec(testString))