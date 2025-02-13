const convertToCelsius = function(f) {
  const celsius = Math.round(((f-32)*(5/9))*10)/10;
  return celsius;
};

const convertToFahrenheit = function(c) {
  const faren = Math.round((c*(9/5)+32)*10)/10;
  return faren;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
