import { getDefaultNormalizer } from '@testing-library/dom';
import { validateRequired, validateMinLength, validateEmail, validatePassword } from './form-validators.js';

describe('form-validators test', () => {
    it('should be a valid email address', () => {
        const email = validateEmail('test.email@gmail.com');
        expect(email.email).toBe('test.email@gmail.com');
    });
});