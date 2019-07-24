const mocha = require('mocha');
const assert = require('assert');

//Import the System under test. (SUT)
const isPrime = require('../pe3/solxn3.js').isPrime;


describe('Solution 3', function (){
  describe('isPrime()', function(){

    it('Correctly assesses primes', function(){
      //Setup
      let val3 = isPrime(3) ;
      let val5 = isPrime(5) ;
      let val7 = isPrime(7) ;

      //Evaluate
      assert.equal(val3 , true);
      assert.equal(val5 , true);
      assert.equal(val7 , true);

      //Cleanup
      val3 = null;
      val5 = null;
      val7 = null;
    });

    it('Correctly Assesses NonPrimes', function(){
      //Setup
      let val22 = isPrime(22);
      let val100 = isPrime(100);
      let val512 = isPrime(512);

      //Evaluate
      assert.equal(val22, false);
      assert.equal(val100, false);
      assert.equal(val512, false);

      //Cleanup
      val22 = null;
      val100 = null;
      val512 = null;
    });

    it('Returns true or false', function(){
      //Setup
      let nullVal = null;
      let aPrime = 7;
      let aNonPrime = 8;

      //Evaluate
      let test1 = isPrime(null);
      let test2 = isPrime(7);
      let test3 = isPrime(8);

      //Test
      assert.equal(test1 , true );
      assert.equal(test2 , true );
      assert.equal(test3 , false );

      //Cleanup
      nullVal = null;
      aPrime = null;
      aNonPrime = null;
      test1 = null;
      test2 = null;
      test3 = null;
    });
  });
});
