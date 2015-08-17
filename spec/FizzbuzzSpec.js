describe('Fizzbuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });



  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisbleByThree(3)).toBe(true);
    });

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisbleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisbleByFive(5)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisbleByFive(1)).toBe(false);
    });

    it('divisible by 5 and 3', function() {
      expect(fizzbuzz.isDivisbleByFifteen(15)).toBe(true);
    });

    it('divisible by 5 and 3', function() {
      expect(fizzbuzz.isDivisbleByFifteen(1)).toBe(false);
    });

  });

  describe('when playing, says', function() {

    it('"Fizz" when a number is divisible by 3', function() {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });

    it('"Fizzbuzz" when a number is divisible by 3 & 5', function() {
      expect(fizzbuzz.says(15)).toEqual("Fizzbuzz");
    });

    it('Number when a number is not divisible by 3 or 5', function() {
      expect(fizzbuzz.says(22)).toEqual(22);
    });

  });

});
