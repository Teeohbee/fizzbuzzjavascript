var Fizzbuzz = function() {};

Fizzbuzz.prototype._isDivisbleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Fizzbuzz.prototype.isDivisbleByThree = function(number) {
  return this._isDivisbleBy(number, 3);
};

Fizzbuzz.prototype.isDivisbleByFive = function(number) {
  return this._isDivisbleBy(number, 5);
};

Fizzbuzz.prototype.isDivisbleByFifteen = function(number) {
  return this._isDivisbleBy(number, 15);
};

Fizzbuzz.prototype.says = function (number) {
  if (this.isDivisbleByFifteen(number)) {
    return "Fizzbuzz";
  }
  if (this.isDivisbleByThree(number)) {
    return "Fizz";
  }
  if (this.isDivisbleByFive(number)) {
    return "Buzz";
  }
  return number;
};
