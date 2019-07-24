'use strict';
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600,851,475,143 ? (CALLED "objectiveNumber")

// Test the objectiveNumber against the list of primes. (Starting with the largest.)
function largestPrimeFactor(aListOfPrimes, testNumber){
  let i= aListOfPrimes.length -1;
  while( i >= 0){
    if( testNumber % aListOfPrimes[i] === 0){
      theLargestPrimeFactor = aListOfPrimes[i]
      return theLargestPrimeFactor;
    }
    i = i-1;
  }
}

// Function to create a list of primes up to a maximum number.
// (Incrementally Test to ensure no heap overload.
// Max number should be larger than the objective number.
let primesList = [];
function createPrimesList(maximumPrimeDesired){
  //Setup for this function
  let i = 2;

  //Loop through to create the primes list.
  while( i <= maximumPrimeDesired ) {
    if( isPrime(i) ){
      primesList.push(i);
      console.log(i)
    }
    i = i + 1;
  }

  // return primesList;
}

// Helper Function to test a number to see if it is prime.
function isPrime(testNum){
  //Loop through the iterator, i to test for even divisibility.
  for( let i=2 ; i < testNum/2 ; i ++){
    if(testNum % i === 0 ){
      return false;
    }
  }
  return true;
}


let objectiveNumber = 459;
let theLargestPrimeFactor;

const MAX_1_000 = 1000;
createPrimesList(MAX_1_000);
largestPrimeFactor(primesList, objectiveNumber)

// If there is a prime that fan 'fit' (%==0) then this is the largest prime.
console.log(`The objectiveNumber is: ${objectiveNumber}`);
console.log(`The prime array is: ${primesList}`);
console.log(`The largest prime factor of the objectiveNumber is: ${theLargestPrimeFactor}`)

// Exports to be able to test functions (or use in other projects)
module.exports = {isPrime};
