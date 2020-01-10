const calculator = {
  displayValue: '0',
  firstOperand: null,
  secondOperand: false,
  operator: null
}

function inputNums(num){
  const {displayValue} = calculator;

  if(calculator.secondOperand == true){
    calculator.displayValue = num;
    calculator.secondOperand = false;
  } else {
    if(displayValue == '0'){
      calculator.displayValue = num;
    } else {
      calculator.displayValue = displayValue + num;
    }
  }
}

function inputDecimal(deci){
  if(calculator.secondOperand == true){
    return;
  }else if(calculator.displayValue.includes('.')){
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
   const value = parseFloat(calculator.displayValue);

   if(calculator.operator && calculator.secondOperand){
      calculator.operator = operator;
      return;
   }

   if(operator == '+/-'){
     return calculator.displayValue *= -1;
   }

   if(operator == '%'){
     return calculator.displayValue *= .01;
   }

   if(calculator.firstOperand == null){
     calculator.firstOperand = value;
   } else if(operator){
     const result = operate(operator, calculator.firstOperand, value);
     calculator.displayValue = result.toString();
     calculator.firstOperand = result;
   }
   calculator.secondOperand = true;
   calculator.operator = operator;
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

function operate(operator, a, b){
  switch(operator){
    case '+':
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case 'X':
      return multiply(a, b);
      break;
    case '/':
      return divide(a, b);
      break;
    case '=':
      if(calculator.operator == '+'){
        return add(a, b);
      } else if(calculator.operator == '-'){
        return subtract(a, b);
      } else if(calculator.operator == 'X'){
        return multiply(a, b);
      } else if(calculator.operator == '/') {
        return divide(a, b);
      }
      break;
    default:
      return "enter valid operator";
  }
}
