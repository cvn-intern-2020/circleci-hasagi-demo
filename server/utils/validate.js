function validateCtoK(temperature) {
  if (temperature < -273.15) {
    return false;
  }
  return true;
}

function validateFtoK(temperature) {
  if (temperature < -459.67) {
    return false;
  }
  return true;
}

module.exports = {
  validateCtoK: validateCtoK,
  validateFtoK: validateFtoK,
};
