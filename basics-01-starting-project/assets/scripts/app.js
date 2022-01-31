alert("You will find your first tech job this year");

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput () {
   return parseInt(userInput.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
   const calDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
   outputResult(currentResult, calDescription);
}

function writeToLog(
   operationIdentifier,
   preResult,
   operationNumber,
   newResult
) {
   const logEntry = {
      operation: operationIdentifier,
      previousResult: preResult,
      number: operationNumber,
      result: newResult
   };
   logEntries.push(logEntry);
   console.log(logEntries);
}

function calculateResult(calculationType) {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   let mathOperator;
   if (calculationType === 'ADD') {
      currentResult += enteredNumber;
      mathOperator = '+';
   } else if (calculationType === 'SUBTRACT'){
      currentResult -= enteredNumber;
      mathOperator = '-';
   } else if (calculationType === 'MULTIPLY') {
      currentResult *= enteredNumber;
      mathOperator = '*';
   } else if (calculationType === 'DIVIDE'){
      currentResult /= enteredNumber;
      mathOperator = '/';
   }
   createAndWriteOutput(mathOperator, initialResult, enteredNumber);
   writeToLog(calculationType, initialResult, enteredNumber, currentResult)
}

function add() {
  calculateResult('ADD');
}

function subtract() {
   calculateResult('SUBTRACT');
}

function multiply() {
   calculateResult('MULTIPLY');
}

function divide() {
   calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


