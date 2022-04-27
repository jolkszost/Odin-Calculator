let displayValue = document.getElementById('display');
let num1Arr = [];
let num2Arr = [];
let operandArr = [];
let num1Str = '';
let num2Str = '';

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
 //   console.log(operandArr);
    

function numberID(clickedNumber) {
    console.log(clickedNumber)
 if  (displayValue.textContent === '0') {
    displayValue.textContent = clickedNumber;
 //  num1Str.padEnd(num1Str.length + 1, clickedNumber.toString());
 //   displayValue.appendChild(num1Str);
    num1Arr.push(clickedNumber);
  //  let num1 = Number(num1Arr.join(""));
  //  displayValue.textContent = num1;
 } else {
 if (operandArr.length === 0) {
    if (num1Arr.length >= 9) {
        num1Arr.length === 9;
        return;
    } else
 //   displayValue.appendChild(num1Str);
  
 //let displayNumber = document.createTextNode(clickedNumber);
   // displayValue.appendChild(displayNumber);
    num1Arr.push(clickedNumber);
    let num1 = Number(num1Arr.join(""));
    displayValue.textContent = num1;
   
    
 } else if (operandArr.length === 1) {
     if (num2Arr.length === 0) {
   /*      displayValue.textContent = '';
    let displayNumber = document.createTextNode(clickedNumber);
    displayValue.appendChild(displayNumber); */
    displayValue.textContent = clickedNumber;
        num2Arr.push(clickedNumber);

 } else {
   /* let displayNumber = document.createTextNode(clickedNumber);
    displayValue.appendChild(displayNumber);*/
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
    if (result.length > 9) {
        result.length === 9
        return result;
    };
     displayValue.textContent = result;
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

/*function negPos() {
    if (num1Arr.indexOf('-') === -1) {
        num1Arr.unshift('-');
        displayValue.textContent = num1Arr.join('');
    }

    
}*/





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
 /*   if (num1 === undefined || num2 === undefined || operand == undefined) {
        return NaN;
    } else { */
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
    return  'eat a dick';
}
 //   console.log(operate())
};
console.log(num1Arr, num2Arr, operandArr);


