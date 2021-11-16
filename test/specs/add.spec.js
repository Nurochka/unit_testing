const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe(`add method validation`, function() {
  let validator;
  beforeEach(function() {
    validator = new Calculator();
  });
  afterEach(function() {
    validator = null;
  });
  it(`should return 9 when add 5 to 4`, function() {
    expect(validator.add(4, 5)).to.be.equal(9);
  });
  it(`should return error if entered number is not number type`, function() {
    expect(() => validator.add('test', 3))
        .to.throw('Only numbers can be added!');
  });
});

