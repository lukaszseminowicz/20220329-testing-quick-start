export function getValidationErrorMessages(validationObject) {
  const validationResults = Object.values(validationObject);
  return validationResults.filter(msg => msg !== '');
}

export function hasAnyErrors(validationResult) {
  for (const key in validationResult) {
    const errorMsg = getValidationErrorMessages(validationResult[key]);
    if (errorMsg.length > 0) {
      return true;
    }
  }
  return false;
}
