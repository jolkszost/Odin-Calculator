let displayValue = document.getElementById('display');
let num1Arr = [];
let num2Arr = [];
let operandArr = [];
let resultArr = [];




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
     let displayNumber = document.createTextNode(result);
     displayValue.appendChild(displayNumber);
  while(operandArr.length > 0) {
        operandArr.pop();}
      while (num1Arr.length > 0) {
         num1Arr.pop();
    }  while (num2Arr.length > 0) {
         num2Arr.pop()
     }
 
     num1Arr.push(result);
     operandArr.push(clickedOperand);

 
     
} else if (num2Arr.length === 0 && operandArr.length === 1 && num1Arr.length > 0) {
    num2Arr.push(num1Arr);
    displayValue.textContent = '';
    let num1 = Number(num1Arr.join(""));
    let num2 = Number(num2Arr.join(""));
    let operand = operandArr.toString();
  
    let result = operate(operand, num1, num2);
     let displayNumber = document.createTextNode(result);
     displayValue.appendChild(displayNumber);
  while(operandArr.length > 0) {
        operandArr.pop();}
      while (num1Arr.length > 0) {
         num1Arr.pop();
    }  while (num2Arr.length > 0) {
         num2Arr.pop()
     }
 
     num1Arr.push(result);
     operandArr.push(clickedOperand);

}
}
    console.log(operandArr);
    

function numberID(clickedNumber) {
    console.log(clickedNumber)

 if (operandArr.length === 0) {
 let displayNumber = document.createTextNode(clickedNumber);
displayValue.appendChild(displayNumber);
    num1Arr.push(clickedNumber);
 } else if (operandArr.length === 1) {
     if (num2Arr.length === 0) {
         displayValue.textContent = ''
    let displayNumber = document.createTextNode(clickedNumber);
    displayValue.appendChild(displayNumber);
        num2Arr.push(clickedNumber);

 } else {
    let displayNumber = document.createTextNode(clickedNumber);
    displayValue.appendChild(displayNumber);
        num2Arr.push(clickedNumber);

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
     let displayNumber = document.createTextNode(result);
     displayValue.appendChild(displayNumber);
  while(operandArr.length > 0) {
        operandArr.pop();}
      while (num1Arr.length > 0) {
         num1Arr.pop();
    }  while (num2Arr.length > 0) {
         num2Arr.pop()
     }
     num1Arr.push(result);
} else 
displayValue.textContent = num1Arr;
}

function percent() {
    
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
    if (x === 0 || y === 0) {
     while(operandArr.length > 0) {
            operandArr.pop();
        } while (num1Arr.length > 0) {
            num1Arr.pop();
        } while (num2Arr.length > 0) {
            num2Arr.pop()
        }
        displayValue.textContent = 'EAT A DICK!';
        
       
    } else {
        divFunc = x / y;
    return divFunc;
       
    }
};
const multiply = function(x, y) {
    multFunc = x * y;
    return multFunc;
};


function operate(operand, num1, num2) {
    if (num1 === undefined || num2 === undefined || operand == undefined) {
        return NaN;
    } else {
    if (operand === '+') {
        return add(num1, num2);
    } else if (operand === '-') {
        return subtract(num1,num2);
    } else if (operand === '*') {
        return multiply(num1, num2);
    } else if (operand === '/') {
        return divide(num1, num2);
    }
}
 //   console.log(operate())
};



