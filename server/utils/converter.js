function convertFToK(temperature) {
  return (temperature + 459.67) * (5 / 9);
}

function convertCToK(temperature) {
  console.log(temperature);
  return temperature + 273.15;
}

function convertFToC(temperature) {
  return ((temperature - 32) * 5) / 9;
}

module.exports = {
  convertFToK: convertFToK,
  convertCToK: convertCToK,
  convertFToC: convertFToC,
};
