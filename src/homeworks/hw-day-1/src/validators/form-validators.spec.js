import { validateRequired, validateMinLength, validateEmail, validatePassword } from './form-validators.js';

describe('form-validators test', () => {
    it('should be required', () => {
        const required = validateRequired('test_field');
        expect(required.required).toBe('');

    });
    it('should be a valid email address', () => {
        const email = validateEmail('test.email@gmail.com');
        expect(email.email).toBe('test.email@gmail.com');
    });
});