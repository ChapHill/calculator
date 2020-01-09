const calculator = {
  displayValue: '0',
  firstOperand: null,
  secondOperand: false,
  operator: null
}

function inputNums(num){
  const {displayValue} = calculator;
  calculator.displayValue = displayValue == '0' ? num : displayValue + num;
}

function inputDecimal(deci){
  if(calculator.displayValue.includes('.')){
    return;
  }
  calculator.displayValue += deci;
}

function updateDisplay(){
  const display = document.querySelector("#display");
  if(display.innerHTML.length >= 30){
    return;
  }
  display.innerText = calculator.displayValue;

}

 function allClear() {
   calculator.displayValue = '0';
   calculator.firstOperand = null;
   calculator.secondOperand = false;
   calculator.operator = null;
 }

 function operation(operator) {
   
 }



updateDisplay();

const keys = document.querySelector('#container');
keys.addEventListener('click', e => {
  const target = e.target;
  if(!target.matches('button')) {
    return;
  }
  if(target.classList.contains('operator')){
    operation(target.innerHTML);
    updateDisplay();
    return;
  }
  if(target.classList.contains('decimal')){
    inputDecimal(target.innerHTML);
    updateDisplay();
    return;
  }
  if(target.classList.contains('clear')){
    allClear();
    updateDisplay();
    return;
  }

  inputNums(target.innerHTML);
  updateDisplay();
});


const add = (a, b) => a+b;
const multiply = (a, b) => a*b;
const subtract = (a, b) => a-b;
const divide = (a, b) => a/b;
const plusMinus = (a) => a *= -1;

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
    case '+/-':
      return plusMinus(a);
      break;
    default:
      return "enter valid operator";
  }
}
