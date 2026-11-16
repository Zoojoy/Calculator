function sum(a, b) {
 return a+b;
}
function subtract(a, b) {
 return a-b;
}
function divide(a, b){
 if(b === 0) {
  return null ;
 }else {
 return a/b;
 }
}
function multiply(a, b) {
 return a*b;
}

function operate(operator, a, b) {
  switch (operator) {
   case "+": 
     return sum(a, b);
  case "-" : 
     return subtract(a, b);
    case "/" :
       return divide(a, b);
     case "*" :
       return multiply(a, b);
   default:
    return null;
  }
};

let firstNumber = null;
let operator = null;
let secondNumber = null;
let usersChoice1 = "";
let usersChoice2 = "";
let result = null;


const buttons = document.querySelector(".buttons");
const numbers = buttons.querySelectorAll(".number");
const display = document.querySelector('.result');
  display.textContent = 0;
for (const number of numbers) {
  number.addEventListener("click", () => {
    if(operator === null) {
      usersChoice1 += number.textContent;
      firstNumber = Number(usersChoice1);
      display.textContent = `${usersChoice1}`;
    }else {
      usersChoice2 += number.textContent;
       secondNumber = Number(usersChoice2);
       display.textContent = `${usersChoice1} ${operator} ${usersChoice2}` ; 
    }
  }
)};

const operators = buttons.querySelectorAll(".operator");
for( const operatorButton of operators) {
  operatorButton.addEventListener("click", () =>{
    operator = operatorButton.dataset.operator;
    display.textContent = `${usersChoice1} ${operator} ` ; 
  });
};

const equals = buttons.querySelector(".equal");
equals.addEventListener("click", () => {
  if ( firstNumber === null || secondNumber === null || operator === null) {
    return;
  }
  if ( operator === "/" && secondNumber === 0) {
    display.textContent = "Cannot divide by zero";
    return;
  }
  result = operate(operator, firstNumber, secondNumber);
  display.textContent = result;
});

const clear = buttons.querySelector(".clear");
clear.addEventListener('click', () => {
firstNumber = null;
secondNumber = null;
usersChoice1 = '';
usersChoice2 = '';
operator = null;
display.textContent = 0;
});

const decimal = buttons.querySelector('.decimal');
decimal.addEventListener('click', () => {
      if (operator === null) {
          if(usersChoice1.includes(".")) {
            return;
          }
        usersChoice1 += ".";
        firstNumber = Number(usersChoice1);
        display.textContent = `${usersChoice1}`;
      } else {
          if(usersChoice2.includes(".")) {
            return;
          }
        usersChoice2 += ".";
        secondNumber = Number(usersChoice2)
        display.textContent = `${usersChoice1} ${operator} ${usersChoice2}`;
      }
  });

  const backspace = buttons.querySelector('.errase');
    backspace.addEventListener('click', () => {
      if (operator === null) {
       usersChoice1= usersChoice1.slice(0, -1);
       firstNumber = Number(usersChoice1);
       display.textContent = `${usersChoice1}`;
      } else if ( usersChoice2 === "") {
        operator = null;
        display.textContent = `${usersChoice1} `;
      } else {
        usersChoice2 = usersChoice2.slice(0, -1);
        secondNumber = Number(usersChoice2);
        display.textContent = `${usersChoice1} ${operator} ${usersChoice2}`;
      }
      if (usersChoice1 === "" && operator === null && usersChoice2 === "") {
        firstNumber = null;
        secondNumber = null;
        result = null;
        display.textContent = "0";
      }
    });

    
      
