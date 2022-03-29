import {
  getValidationErrorMessages,
  hasAnyErrors,
} from '../validators/form-errors';
import { formValue, validationResult } from './sign-up-form.js';
import {
  validateEmail,
  validateMinLength,
  validatePassword,
  validateRequired,
} from '../validators/form-validators.js';

const $form = document.querySelector('[data-form]');

$form.addEventListener('submit', ev => {
  ev.preventDefault();
  if (validateAllFields()) {
    return;
  }
  alert(`Form values: ${JSON.stringify(formValue, null, 2)}`);
});

function validateAllFields() {
  const inputNames = Object.keys(validationResult);
  for (const name of inputNames) {
    const $element = $form.querySelector(`.field [name="${name}"]`);
    $element.focus();
    $element.blur();
  }
  return hasAnyErrors(validationResult);
}

function validateRequiredEvent(ev) {
  validationResult[ev.target.name] = {
    ...validationResult[ev.target.name],
    ...validateRequired(ev.target.value, ev.target.dataset.validateRequired),
  };
  formValue[ev.target.name] = ev.target.value;
  showHelpers(ev.target.name);
}

$form.querySelectorAll('[data-validate-required]').forEach(element => {
  element.addEventListener('input', validateRequiredEvent);
  element.addEventListener('blur', validateRequiredEvent);
});

function validateMinLengthEvent(ev) {
  validationResult[ev.target.name] = {
    ...validationResult[ev.target.name],
    ...validateMinLength(ev.target.value, ev.target.dataset.validateMinLength),
  };
  formValue[ev.target.name] = ev.target.value;
  showHelpers(ev.target.name);
}

$form.querySelectorAll('[data-validate-min-length]').forEach(element => {
  element.addEventListener('input', validateMinLengthEvent);
  element.addEventListener('blur', validateMinLengthEvent);
});

function validateEmailEvent(ev) {
  validationResult[ev.target.name] = {
    ...validationResult[ev.target.name],
    ...validateEmail(ev.target.value, ev.target.dataset.validateEmail),
  };
  formValue[ev.target.name] = ev.target.value;
  showHelpers(ev.target.name);
}

$form.querySelectorAll('[data-validate-email]').forEach(element => {
  element.addEventListener('input', validateEmailEvent);
  element.addEventListener('blur', validateEmailEvent);
});

function validatePasswordEvent(ev) {
  validationResult[ev.target.name] = {
    ...validationResult[ev.target.name],
    ...validatePassword(ev.target.value, ev.target.dataset.validatePassword),
  };
  formValue[ev.target.name] = ev.target.value;
  showHelpers(ev.target.name);
}

$form.querySelectorAll('[data-validate-password]').forEach(element => {
  element.addEventListener('input', validatePasswordEvent);
  element.addEventListener('blur', validatePasswordEvent);
});

function showHelpers(name) {
  const errorMessages = getValidationErrorMessages(validationResult[name]);
  const $helpBox = $form
    .querySelector(`.field [name="${name}"]`)
    .parentNode.parentNode.querySelector('.help');
  if (errorMessages.length > 0) {
    $helpBox.textContent = errorMessages.join(', ');
    $helpBox.style.visibility = 'visible';
  } else {
    $helpBox.style.visibility = 'hidden';
  }
}
