function sum(a, b) {
  if (a===undefined && b===undefined) return 0;
  if (a!==undefined && b===undefined) return a;
  if (a!==undefined && b!==undefined) return a + b;
}

function subtract(a, b) {
  if (a===undefined && b===undefined) return 0;
  if (a!==undefined && b===undefined) return a;
  if (a!==undefined && b!==undefined) return a - b;
}

function divide(a, b) {
  if (a===undefined && b===undefined) return 0;
  if (a!==undefined && b===undefined) return a;
  if (a!==undefined && b!==0) return a / b;
  if (a!==undefined && b===0) throw new Error('Invalid divide');
}

function multiply(a, b) {
  if (a===undefined && b===undefined) return 0;
  if (a!==undefined && b===undefined) return a;
  if (a!==undefined && b!==undefined) return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
