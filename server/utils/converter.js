const validate = require("./validate");
function convertFToK(temperature) {
  if(validate.validateFtoK(temperature)) return (temperature + 459.67) * (5 / 9);
  return false;
}

function convertCToK(temperature) {
  if(validate.validateCtoK(temperature))   return temperature + 273.15;
  return false;
}

function convertFToC(temperature) {
  return ((temperature - 32) * 5) / 9;
}

module.exports = {
  convertFToK: convertFToK,
  convertCToK: convertCToK,
  convertFToC: convertFToC,
};
