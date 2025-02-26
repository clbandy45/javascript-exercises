const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(arr) {
  let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
  return totalSum;
};

const multiply = function(arr) {
  let totalMultiply = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1); 
  return totalMultiply;
};

const power = function(a,b) {
  return a ** b;
};

const factorial = function(a) {
	if (a == 0) {
    return 1;
  } else {
    return a * factorial(a-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
