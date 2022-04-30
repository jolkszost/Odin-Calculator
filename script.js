let displayValue = document.getElementById('display');
let num1Arr = [];
let num2Arr = [];
let operandArr = [];


displayValue.textContent ='0';







function operandID(clickedOperand) {
  
    if (num2Arr.length === 0 && operandArr.length === 0) {

    operandArr.push(clickedOperand);
    }
 else if (num2Arr.length > 0 && operandArr.length === 1) {
        displayValue.textContent = '';
        let num1 = Number(num1Arr.join(""));
        let num2 = Number(num2Arr.join(""));
        let operand = operandArr.toString();
        let result = operate(operand, num1, num2);
        if (result > 999999999) {
          displayValue.textContent = result.toExponential(4);
          while(operandArr.length > 0) {
            operandArr.pop();}
          while (num1Arr.length > 0) {
             num1Arr.pop();
        }  while (num2Arr.length > 0) {
             num2Arr.pop()
         }
          num1Arr.push(result.toExponential(4))
          operandArr.push(operand);
    
            
        } else if (result.toString().length > 9 && result.toString().indexOf('.') !== -1) {
            let roundResult = result.toFixed(8 - result.toString().indexOf('.'))
            displayValue.textContent = roundResult;
            while(operandArr.length > 0) {
                operandArr.pop();}
              while (num1Arr.length > 0) {
                 num1Arr.pop();
            }  while (num2Arr.length > 0) {
                 num2Arr.pop()
             }
             num1Arr.push(result.toFixed(8 - result.toString().indexOf('.')));
        } else 
         displayValue.textContent = result;
      while(operandArr.length > 0) {
            operandArr.pop();}
          while (num1Arr.length > 0) {
             num1Arr.pop();
        }  while (num2Arr.length > 0) {
             num2Arr.pop()
         }
         num1Arr.push(result);
         operandArr.push(operand);
 
} else if (num2Arr.length === 0 && operandArr.length === 1 && num1Arr.length > 0) {
  
        displayValue.textContent = '';
        let num1 = Number(num1Arr.join(""));
        let num2 = Number(num2Arr.join(""));
        let operand = operandArr.toString();
        let result = operate(operand, num1, num2);
        if (result > 999999999) {
          displayValue.textContent = result.toExponential(4);
        
          while(operandArr.length > 0) {
            operandArr.pop();}
          while (num1Arr.length > 0) {
             num1Arr.pop();
        }  while (num2Arr.length > 0) {
             num2Arr.pop()
         }
          num1Arr.push(result.toExponential(4))
    
            
        } else if (result.toString().length > 9 && result.toString().indexOf('.') !== -1) {
            let roundResult = result.toFixed(8 - result.toString().indexOf('.'))
            displayValue.textContent = roundResult;
            while(operandArr.length > 0) {
                operandArr.pop();}
              while (num1Arr.length > 0) {
                 num1Arr.pop();
            }  while (num2Arr.length > 0) {
                 num2Arr.pop()
             }
             num1Arr.push(result.toFixed(8 - result.toString().indexOf('.')));
        } else
         displayValue.textContent = result;
      while(operandArr.length > 0) {
            operandArr.pop();}
          while (num1Arr.length > 0) {
             num1Arr.pop();
        }  while (num2Arr.length > 0) {
             num2Arr.pop()
         }
         num1Arr.push(result);
    } 
   
}

    

function numberID(clickedNumber) {
    console.log(clickedNumber)
 if  (displayValue.textContent === '0') {
   
 
    num1Arr.push(clickedNumber);
    let num1 = Number(num1Arr.join(""));
    displayValue.textContent = num1;
  
 } else {
 if (operandArr.length === 0) {
    if (num1Arr.length >= 9) {
        num1Arr.length === 9;
        return;
    } else
 
  
 
    num1Arr.push(clickedNumber);
    let num1 = Number(num1Arr.join(""));
    displayValue.textContent = num1;
   
    
 } else if (operandArr.length === 1) {
     if (num2Arr.length === 0) {
  
    displayValue.textContent = clickedNumber;
        num2Arr.push(clickedNumber);

 } else {
   
    if (num2Arr.length >= 9) {
        num2Arr.length === 9;
        return;
    } 
    num2Arr.push(clickedNumber);
    let num2 = Number(num2Arr.join(""));
    displayValue.textContent = num2;

 }
}    
}
}



function equals() {
    if (num1Arr.length > 0 && num2Arr.length > 0 && operandArr.length > 0) {
    displayValue.textContent = '';
    let num1 = Number(num1Arr.join(""));
    let num2 = Number(num2Arr.join(""));
    let operand = operandArr.toString();
    let result = operate(operand, num1, num2);
    if (result > 999999999) {
      displayValue.textContent = result.toExponential(4);
      while(operandArr.length > 0) {
        operandArr.pop();}
      while (num1Arr.length > 0) {
         num1Arr.pop();
    }  while (num2Arr.length > 0) {
         num2Arr.pop()
     }
      num1Arr.push(result.toExponential(4))
     
        
    } else if (result.toString().length > 9 && result.toString().indexOf('.') !== -1) {
        let roundResult = result.toFixed(8 - result.toString().indexOf('.'))
        displayValue.textContent = roundResult;
        while(operandArr.length > 0) {
            operandArr.pop();}
          while (num1Arr.length > 0) {
             num1Arr.pop();
        }  while (num2Arr.length > 0) {
             num2Arr.pop()
         }
         num1Arr.push(result.toFixed(8 - result.toString().indexOf('.')));
    } else


    displayValue.textContent = result;
  while(operandArr.length > 0) {
        operandArr.pop();}
      while (num1Arr.length > 0) {
         num1Arr.pop();
    }  while (num2Arr.length > 0) {
         num2Arr.pop()
     }
     num1Arr.push(result);
}
}

function dec() {
    if (operandArr.length === 0 && num1Arr.join('').indexOf('.') === -1) {
        num1Arr.push('.');
        displayValue.textContent = num1Arr.join('');
  
        
    } else if (operandArr.length > 0 && num2Arr.indexOf('.') === -1) {
        num2Arr.push('.')
    
     displayValue.textContent = num2Arr.join('');
    }
};
function negPos() {
    if (operandArr.length === 0 && num1Arr.indexOf('-') === -1 && num1Arr[0] > 0){
        num1Arr.unshift('-');
        displayValue.textContent = num1Arr.join('');
    } else if (operandArr.length > 0 && num2Arr.indexOf('-') === -1) {
        num2Arr.unshift('-');
        displayValue.textContent = num2Arr.join('');
    } else if (operandArr.length === 0 && num1Arr.indexOf('-') !== -1) {
            num1Arr.shift();
            displayValue.textContent = num1Arr.join('').slice(0);
        } else if (operandArr.length > 0 && num2Arr.indexOf('-') !== -1) {
            num2Arr.shift()
            displayValue.textContent = num2Arr.join('').slice(0);
        }
    };
function percent() {
    if (operandArr.length === 0) {
      let percent = Number(num1Arr.join('')) / 100;
     while (num1Arr.length > 0) {
         num1Arr.pop()
     }
      num1Arr.push(percent);
      displayValue.textContent = percent;
    } else if (operandArr.length > 0) {
    let percent = Number(num2Arr.join('')) / 100;
   while (num2Arr.length > 0) {
       num2Arr.pop()
   }
    num2Arr.push(percent);
    displayValue.textContent = percent;
  }
}




const add = function(x, y) {
	addFunc = x + y;
  return addFunc;
};

const subtract = function(x, y) {
	subFunc = x - y;
  return subFunc;
};

const divide = function(x, y) {

     divFunc = x / y;
    return divFunc;
};
const multiply = function(x, y) {
    multFunc = x * y;
    return multFunc;
};


function operate(operand, num1, num2) {
 
    if (operand === '+') {
        return add(num1, num2);
    } else if (operand === '-') {
        return subtract(num1,num2);
    } else if (operand === '*') {
        return multiply(num1, num2);
    } else if (operand === '/' && num1 !==0 && num2 !== 0) {
        return divide(num1, num2);
    } else 
    while(operandArr.length > 0) {
        operandArr.pop();
    } while (num1Arr.length > 0) {
        num1Arr.pop();
    } while (num2Arr.length > 0) {
        num2Arr.pop()
    return  'FU';
}
 
};



