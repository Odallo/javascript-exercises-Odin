const add = function(num1, num2) {
	return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2)
};

const sum = function(num1, num2) {
	let sum = 0;
  for(let i = 0; i < num2; i++){
    sum += num1 + i;
  }

  return sum;
};

const multiply = function(num1, num2) {
 return (num1 * num2);
};

const power = function(num, power) {
	return (num ** power);
};

const factorial = function(n) {
	if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
