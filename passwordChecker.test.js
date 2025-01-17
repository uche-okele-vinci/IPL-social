

describe('Password Validation', () => {
  it('should return false for passwords with less than 8 characters', () => {
    expect(isPasswordValid('abc!1')).toBe(false);
  });
});