import { validateRequired, validateMinLength, validateEmail, validatePassword } from './form-validators.js';

describe('form-validators test', () => {
    it('should be required', () => {
        const required = validateRequired('test_field');
        expect(required.required).toBe('');
    });
    it('should be ...', () => {
        const validateLength = validateMinLength('Altkom', 6);
        expect(validateLength.minLength).toBe('');
    });
    it('should be a valid email address', () => {
        const email = validateEmail('test.email@gmail.com');
        expect(email.email).toBe('test.email@gmail.com');
    });
    it('should be a valid password', () => {
        const password = validatePassword('pa$sword1');
        expect(password.password).toBe('');
    });
});