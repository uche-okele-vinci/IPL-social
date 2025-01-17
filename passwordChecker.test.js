

describe('Password Validation', () => {
  it('should return false for passwords with less than 8 characters', () => {
    expect(isPasswordValid('abc!1')).toBe(false);
  });

  it('should return false for passwords without a special character', () => {
    expect(isPasswordValid('abcdefgh1')).toBe(false);
  });

  it('should return false for passwords without a digit', () => {
    expect(isPasswordValid('abcdefgh!')).toBe(false);
  });

  it('should return false for passwords containing "IPL" in any case', () => {
    expect(isPasswordValid('abcdeIPL1!')).toBe(false);
    expect(isPasswordValid('abcdeipl1!')).toBe(false);
    expect(isPasswordValid('abcdeIpl1!')).toBe(false);
  });
});