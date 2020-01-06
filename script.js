const add = (a, b) => a+b;
const multiply = (a, b) => a*b;
const subtract = (a, b) => a-b;
const divide = (a, b) => a/b;

function operate(operator, a, b){
  switch(operator){
    case '+':
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case '*':
      return multiply(a, b);
      break;
    case '/':
      return divide(a, b);
      break;
    default:
      return "enter valid operator";
  }
}

const display = document.querySelector("#display");
display.innerHTML = operate("+", 10, 20);
