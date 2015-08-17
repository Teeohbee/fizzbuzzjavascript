var Fizzbuzz = function() {};

Fizzbuzz.prototype._isDivisbleBy = function(number, divisor) {
  if (number % divisor === 0){
    return true;
  } else {
      return false;
  }
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
