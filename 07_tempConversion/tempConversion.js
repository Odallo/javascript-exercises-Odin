const convertToCelsius = function(tempInFahrenheit) {
  return (tempInFahrenheit - 32) * 5/9;
};

const convertToFahrenheit = function(tempInCelcius) {
  return (tempInCelcius * 9/5) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
