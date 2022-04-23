const add = function(num1, num2) {
	addFunc = num1 + num2;
  return addFunc;
};

const subtract = function(num1, num2) {
	subFunc = num1 - num2;
  return subFunc;
};
/*const multiply = function(numb) {
    
      const multFunc = numb.reduce(
        (previousValue, currentValue) =>
        Number(previousValue) * Number(currentValue)
      );
      return Number(multFunc);
    };  */
const divide = function(num1, num2) {
    divFunc = num1 / num2
    return divFunc;
};
const multiply = function(num1, num2) {
    multFunc = num1 * num2;
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
};


function operandID(clickedOperand) {
    console.log(clickedOperand)
    return clickedOperand;
}
function numberID(clickedNumber) {
    console.log(clickedNumber)
    return clickedNumber;
}

function clearID(clickedClear) {
    console.log(clickedClear)
    return clickedClear;
}

let displayValue = document.getElementById('display');

