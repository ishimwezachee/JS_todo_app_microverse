const methods = require('./tasks');

test('propery if we get the length of inputed string', () => {
  const result = methods.stringLength('hello');
  expect(result).toBe(5);
});

test('check love to return a length four', () => {
  expect(methods.stringLength('love')).toBe(4);
});

test('check if the empty string are falsy', () => {
  const result = methods.stringLength(' ');
  expect(result).toBeFalsy();
});

test('check str length to be less or equal to 10', () => {
  const result = methods.stringLength('hello');
  expect(result).toBeLessThan(11);
});

test('hello should get its reverse "olleh"', () => {
  const result = methods.reverseString('hello');
  expect(result).toBe('olleh');
});

describe('mathematical operations', () => {
  const calcultor = new methods.Calculator(1, 2);
  test('sum of 1 and 2 equal to 3', () => {
    const result = calcultor.add();
    expect(result).toBe(3);
  });
  test('different between 1 and 2 to be -1', () => {
    const result = calcultor.subtract();
    expect(result).toBe(-1);
  });

  test('product of 1 and 2 equal to 2', () => {
    const result = calcultor.multiply();
    expect(result).toBe(2);
  });
  test('division between 1 and 2 to be 0.5', () => {
    const result = calcultor.divide();
    expect(result).toBe(0.5);
  });
});

test('captalize a "hello" string', () => {
  const result = methods.capitalize('hello');
  expect(result).toBe('Hello');
});