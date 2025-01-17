const isPasswordCorrect = require('./passwordChecker');


test('Password with less than 8 characters is invalid', () => {
    expect(isPasswordValid('abc!1')).toBe(false);
});