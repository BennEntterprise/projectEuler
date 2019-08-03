'use strict';

//This solution makes use of the fact that you can divide a number by one of its
//prime factors, and the solution to that division has the same facoritzation.
//Example:
//PrimeFactors(48) = 2 * primeFactors(24)
//PrimeFactors(48) = 2 * 2 *primeFactors(12)
//PrimeFactors(48) = 2 * 2 * 2 * primeFactors(3)
//PrimeFactors(48) = 2 * 2 * 2 * 3
//Ergo the largest prime factor of 48 is 3.

//Function that returns an array with the prime factor deconstruction
function primesDeconstruction(targetNumberForDeconstruction){
  let currentNumerator = targetNumberForDeconstruction;
  let prevNumerator;
  let primeFactorization=[];
  let testDivisor=2;


  //
  do {
    if(currentNumerator % testDivisor === 0){
      primeFactorization.push(testDivisor);
      prevNumerator = currentNumerator;
      currentNumerator = prevNumerator / testDivisor;
    }else{
      //Find Next testDivisor (Next Largest Prime)
      testDivisor = nextLargestPrime(testDivisor)
    }
  }while(testDivisor <= currentNumerator)


  return primeFactorization;
}

function nextLargestPrime(currentPrime){
  let testNum = currentPrime;
  do{
    if(isPrime(testNum+1)){
      return testNum + 1
    }else{
      testNum +=1;
    }
  }while(!isPrime(testNum))

}


//Test to see if a number is prime
function isPrime(testNum) {
  //Loop through the iterator, i to test for even divisibility.
  for (let i = 2; i < testNum / 2; i++) {
    if (testNum % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to create a list of primes up to a maximum number.
function createPrimesList(ceiling) {
  //Setup for this function
  let i = 2;
  let primesList=[];
  //Loop through to create the primes list.
  while (i <= ceiling) {
    if (isPrime(i)) {
      primesList.push(i);
    }
    i = i + 1;
  }

  return primesList;
}
module.exports ={ primesDeconstruction, isPrime , createPrimesList};
