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
let calculated = null;
let hasCalculated = false;
let firstNumberPercent = false;
let secondNumberPercent = false;

const buttons = document.querySelector(".buttons");
const numbers = buttons.querySelectorAll(".number");
const display = document.querySelector('.result');
  display.textContent = 0;
for (const number of numbers) {
     number.addEventListener("click", () => {
        if (hasCalculated === true) {
             result = null;
             usersChoice1 = "";
             usersChoice1 += number.textContent;
             firstNumber = Number(usersChoice1);
             usersChoice2 = "";
             secondNumber = null;
             operator = null;
             display.textContent = `${usersChoice1}`;
             hasCalculated = false;
             return;
       } else {
           if (operator === null) {
               usersChoice1 += number.textContent;
               firstNumber = Number(usersChoice1);
               display.textContent = `${usersChoice1}`;
       }else {
             usersChoice2 += number.textContent;
             secondNumber = Number(usersChoice2);
             display.textContent = `${usersChoice1} ${operator} ${usersChoice2}` ; 
    }
  }
  }
)};

const operators = buttons.querySelectorAll(".operator");
for( const operatorButton of operators) {
    operatorButton.addEventListener("click", () =>{
      if ( firstNumber !== null && operator !== null && secondNumber !== null) {
        result = operate (operator, firstNumber, secondNumber);
        firstNumber = Number(result.toFixed(2));
        usersChoice1 = String(firstNumber);
        secondNumber = null;
        usersChoice2 = "";
        operator = operatorButton.dataset.operator;
      } else {
        operator = operatorButton.dataset.operator;
      }
      display.textContent = `${firstNumber} ${operator} ${usersChoice2}`;
         if (hasCalculated === true) {
              hasCalculated = false;
         }
  });
};

const equals = buttons.querySelector(".equal");
equals.addEventListener("click", () => {
    if (operator === null && firstNumber !== null) {
       display.textContent = firstNumber;
       return;
}
     if ( firstNumber === null || secondNumber === null || operator === null) {
      return;
  }
  if ( operator === "/" && secondNumber === 0) {
    firstNumber = null;
    usersChoice1 = "";
    operator = null;
    secondNumber = null;
    usersChoice2 = "";
    result = null;
    display.textContent = "Cannot divide by zero";
    return;
  }

  result = operate(operator, firstNumber, secondNumber);
  result = Number(result.toFixed(2));
  firstNumber = result;
  display.textContent = result;
  usersChoice1 = String(result);
  secondNumber = null;
  usersChoice2 = "";
  operator = null;
  hasCalculated = true;
});

const clear = buttons.querySelector(".clear");
clear.addEventListener('click', () => {
    firstNumber = null;
    secondNumber = null;
    usersChoice1 = '';
    usersChoice2 = '';
    operator = null;
    result = null;
    hasCalculated = false;
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
         if ( firstNumberPercent === true) {
          firstNumber = Number(usersChoice1);
          display.textContent = `${usersChoice1}`;
          firstNumberPercent = false;
          return;
         }
           usersChoice1= usersChoice1.slice(0, -1);
           firstNumber = Number(usersChoice1);
           display.textContent = `${usersChoice1}`;
      }  if ( secondNumberPercent === true) {
          secondNumber = Number(usersChoice2);
          display.textContent = `${usersChoice1} ${operator} ${usersChoice2}`;
          secondNumberPercent = false;
          return;
        }
      else if ( usersChoice2 === "") {
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

    const percentage = buttons.querySelector('.percent');
        percentage.addEventListener('click', () => {
            if(operator === null) {
              firstNumberPercent = true;
              firstNumber = firstNumber/100;
              //usersChoice1 = String(firstNumber);
              display.textContent = `${usersChoice1}%`;
            } else {
               if ( operator === "+" || operator === "-") {
                secondNumber = firstNumber*(secondNumber/100);
                display.textContent = `${usersChoice1} ${operator} ${usersChoice2}%`;
               } else if ( operator === "*" || operator === "/") {
                secondNumber = secondNumber/100;
                display.textContent = `${usersChoice1} ${operator} ${usersChoice2}%`
               }
               secondNumberPercent = true;
              }
        });

                                                                                           //Keyboard support

          document.addEventListener('keydown', (event) => {
              if ("0123456789".includes(event.key)) {
                if (hasCalculated === true) {
                      result = null;
                     usersChoice1 = "";
                     usersChoice1 += event.key;
                     firstNumber = Number(usersChoice1);
                     usersChoice2 = "";
                     secondNumber = null;
                     operator = null;
                     display.textContent = `${usersChoice1}`;
                     hasCalculated = false;
                     return;
   } else {
                if (operator === null) {
                   usersChoice1 += event.key;
                   firstNumber = Number(usersChoice1);
                   display.textContent = `${usersChoice1}`;
    }else {
       usersChoice2 += event.key;
       secondNumber = Number(usersChoice2);
       display.textContent = `${usersChoice1} ${operator} ${usersChoice2}` ; 
    }
  }
              }
          });

          document.addEventListener("keydown", (event) => {
            if (["-", "+", "*", "/"].includes(event.key)) {
               if ( firstNumber !== null && operator !== null && secondNumber !== null) {
                   result = operate (operator, firstNumber, secondNumber);
                   firstNumber = Number(result.toFixed(2));
                   usersChoice1 = String(firstNumber);
                   secondNumber = null;
                   usersChoice2 = "";
                   operator = event.key;
      } else {
            operator = event.key;
      }
      display.textContent = `${firstNumber} ${operator} ${usersChoice2}`;
             if (hasCalculated === true) {
             hasCalculated = false;
         }
            }
          });

          document.addEventListener('keydown', (event) => { 
              if(event.key === "Enter" || event.key ==="="){
                   if (operator === null && firstNumber !== null) {
                       display.textContent = firstNumber;
                       return;
}
  if ( firstNumber === null || secondNumber === null || operator === null) {
         return;
  }
  if ( operator === "/" && secondNumber === 0) {
    firstNumber = null;
    usersChoice1 = "";
    operator = null;
    secondNumber = null;
    usersChoice2 = "";
    result = null;
    display.textContent = "Cannot divide by zero";
    return;
  }

  result = operate(operator, firstNumber, secondNumber);
  result = Number(result.toFixed(2));
  firstNumber = result;
  display.textContent = result;
  usersChoice1 = String(result);
  secondNumber = null;
  usersChoice2 = "";
  operator = null;
  hasCalculated = true;
            }
          });
          

          document.addEventListener('keydown', (event) => {
              if(event.key === "Backspace") {
                 if (operator === null) {
                   if ( firstNumberPercent === true) {
                         firstNumber = Number(usersChoice1);
                         display.textContent = `${usersChoice1}`;
                         firstNumberPercent = false;
                         return;
         }
                     usersChoice1= usersChoice1.slice(0, -1);
                    firstNumber = Number(usersChoice1);
                   display.textContent = `${usersChoice1}`;
      } if ( secondNumberPercent === true) {
          secondNumber = Number(usersChoice2);
          display.textContent = `${usersChoice1} ${operator} ${usersChoice2}`;
          secondNumberPercent = false;
          return;
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
              }
          });

          document.addEventListener('keydown', (event) => {
              if(event.key === "Escape") {
                  firstNumber = null;
                  secondNumber = null;
                  usersChoice1 = '';
                  usersChoice2 = '';
                  operator = null;
                  result = null;
                  hasCalculated = false;
                  display.textContent = 0;
              }
          });

          document.addEventListener('keydown', (event) => {
              if( event.key === ".") {
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
              }
          });

          document.addEventListener('keydown', (event) => {
              if ( event.key === "%") {
                  if(operator === null) {
              firstNumber = firstNumber/100;
              //usersChoice1 = String(firstNumber);
              firstNumberPercent = true;
              display.textContent = `${usersChoice1}%`;
            } else {
               if ( operator === "+" || operator === "-") {
                secondNumber = firstNumber*(secondNumber/100);
                secondNumberPercent = true;
                display.textContent = `${usersChoice1} ${operator} ${usersChoice2}%`;
               } else if ( operator === "*" || operator === "/") {
                secondNumber = secondNumber/100;
                secondNumberPercent = true;
                display.textContent = `${usersChoice1} ${operator} ${usersChoice2}%`
               }
              }
              }
          });

