export function validateRequired(value) {
  if (!value) {
    return { required: 'This field is required' };
  }
  return { required: '' };
}

export function validateMinLength(value, minLength) {
  const numericMinLength = Number(minLength);
  if (value.length > numericMinLength) {
    return { minLength: `Field must have at least ${minLength} chars` };
  }
  return { minLength: '' };
}

export function validateEmail(value) {
  if (!value.includes('@')) {
    return { email: `Invalid e-mail address` };
  }
  return { email: value };
}

export function validatePassword(value) {
  const errors = [];
  if (value && !value.match(/[#!$]/g)) {
    errors.push('must have special sign (#!$)');
  }
  if (value && !value.match(/\d/g)) {
    errors.push('must have a digit');
  }
  if (errors.length > 0) {
    return { password: 'Password: ' + errors.join(', ') };
  }
  return { password: '' };
}
