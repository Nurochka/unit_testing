/**
 *A simple calculator class containing 'add' and 'multiply' methods
 *
 * @class Calculator
 */
class Calculator {
  /**
     * Creates an instance of Calculator.
     * @memberof Calculator
     */
  constructor() {
  };
  /**
    *
    *
    * @param {Number} firstNumber first number
    * @param {Number} secondNumber second number to add
    * @return {Number} result of adding
    * @memberof Calculator
    */
  add(firstNumber, secondNumber) {
    const typeOfFirstNumber = typeof firstNumber;
    const typeOfSecondNumber = typeof secondNumber;
    if (typeOfFirstNumber !== 'number' || typeOfSecondNumber !== 'number') {
      throw new Error('Only numbers can be added!');
    } else {
      return firstNumber + secondNumber;
    }
  };

  /**
 *
 *
 * @param {Number} firstNumber first number
 * @param {Number} secondNumber second number to multiply
 * @return {Number} result of multiplication
 * @memberof Calculator
 */
  multiply(firstNumber, secondNumber) {
    const typeOfFirstNumber = typeof firstNumber;
    const typeOfSecondNumber = typeof secondNumber;
    if (typeOfFirstNumber !== 'number' || typeOfSecondNumber !== 'number') {
      throw new Error('Only numbers can be multiplied!');
    } else {
      return firstNumber * secondNumber;
    }
  };
}
module.exports = Calculator;
