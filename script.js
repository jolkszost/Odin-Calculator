let displayValue = document.getElementById('display');
let num1Arr = [];
let num2Arr = [];
let operandArr = [];



 /*   function numberID(clickedNumber) {
        console.log(clickedNumber)
     // displayValue.textContent = clickedNumber;
     let displayNumber = document.createTextNode(clickedNumber);
    displayValue.appendChild(displayNumber);
        num1Arr.push(clickedNumber);
        
    }
    

console.log(num2Arr);*/

function operandID(clickedOperand) {
  
    if (num2Arr.length === 0) {
 //   displayValue.textContent='';
    operandArr.push(clickedOperand);
    }
 else if (num2Arr.length > 0) {

    displayValue.textContent = '';
    let num1 = Number(num1Arr.join(""));
    let num2 = Number(num2Arr.join(""));
    let operand = operandArr.toString();
  //  let resultArr = [];
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
  //   resultArr.push(result);
     num1Arr.push(result);
     operandArr.push(clickedOperand);

  //   while (resultArr
     
}
}
    console.log(operandArr);
    

function numberID(clickedNumber) {
    console.log(clickedNumber)
 // displayValue.textContent = clickedNumber;
 if (operandArr.length === 0 && num1Arr.length === 0) {
 let displayNumber = document.createTextNode(clickedNumber);
displayValue.appendChild(displayNumber);
    num1Arr.push(clickedNumber);
 } else if (operandArr.length === 1 && num2Arr.length === 0) {
     displayValue.textContent = ''
    let displayNumber = document.createTextNode(clickedNumber);
    displayValue.appendChild(displayNumber);
        num2Arr.push(clickedNumber);

 } 
     
}




function equals() {
    
    displayValue.textContent = '';
    let num1 = Number(num1Arr.join(""));
    let num2 = Number(num2Arr.join(""));
    let operand = operandArr.toString();
    let result = operate(operand, num1, num2);
     let displayNumber = document.createTextNode(result);
     displayValue.appendChild(displayNumber);
  while(operandArr.length > 0) {
        operandArr.pop();}
      while (num1Arr > 0) {
         num1Arr.pop();
    }  while (num2Arr > 0) {
         num2Arr.pop()
     }
     num1Arr.push(result);
}



function clearID(clickedClear) {
    console.log(clickedClear)
    displayValue.textContent = '';
    while(operandArr.length > 0) {
        operandArr.pop();
    } while (num1Arr > 0) {
        num1Arr.pop();
    } while (num2Arr > 0) {
        num2Arr.pop()
    }
    return clickedClear;
}





const add = function(x, y) {
	addFunc = x + y;
  return addFunc;
};

const subtract = function(x, y) {
	subFunc = x - y;
  return subFunc;
};
/*const multiply = function(numb) {
    
      const multFunc = numb.reduce(
        (previousValue, currentValue) =>
        Number(previousValue) * Number(currentValue)
      );
      return Number(multFunc);
    };  */
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
        return add(num1, num2)
    } else if (operand === '-') {
        return subtract(num1,num2)
    } else if (operand === '*') {
        return multiply(num1, num2)
    } else if (operand === '/') {
        return divide(num1, num2)
    }
    console.log(operate())
};


//let operand = clickedOperand;
//let num2 = clickedNumber;

