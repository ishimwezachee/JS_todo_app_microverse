// task 1

const stringLength = (str) => {
  if (!str.trim() || str.length > 10) {
    return false;
  }
  return str.length;
};

// task 2

const reverseString = (str) => str.split('').reverse().join('');

// task 3

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  subtract() {
    return this.a - this.b;
  }

  divide() {
    return this.a / this.b;
  }

  multiply() {
    return this.a * this.b;
  }
}

// task4

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// exports
module.exports = {
  stringLength, reverseString, Calculator, capitalize,
};