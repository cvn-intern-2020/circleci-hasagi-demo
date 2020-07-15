function convertFToK(temperature) {
  return (temperature + 459.67)*(5/9);
}

function convertCToK(temperature) {
  return temperature + 273.15;
}

function convertFToC(temperature) {
  return (temperature - 32) * 5/9;
}

module.exports = {
  convertToC: convertToC,
  convertToF: convertToF,
  convertFToC: convertFToC
};
