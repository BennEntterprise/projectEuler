'use strict';
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600,851,475,143 ? (CALLED "objectiveNumber")

//There are:
//    6,000ms in one min
//    360,000 in one Hour
//    8,640,000ms in one day
//    60,480,000ms in one week.
//    3,144,960,000ms in one year.


//// NOTE: This method will work, but it will take very long. So I will be revisiting this utilizing a new method.
//TODO:PRIME FACTORIZATION DECONSTRUCTION TECHNIQUE are unique. Therefore,
//if I can make our objective prime a smaller prime by dividing it by a prime,
//my algorithm will not have to run as many while loops. If if I can make our
//objective number smaller by a few magnitudes then I will be able to process this algorithm much quicker.



const helperFunctions = require('./helperFunctions');
const createPrimesList = helperFunctions.createPrimesList;
const primesDeconstruction = helperFunctions.primesDeconstruction;


function main(){
  let objectiveNumber = 600851475143;
  // let setOfPrimes = createPrimesList(objectiveNumber/2);
  let primeFactorizationList = primesDeconstruction(objectiveNumber);
  let largestP = primeFactorizationList[primeFactorizationList.length -1];

  // If there is a prime that fan 'fit' (%==0) then this is the largest prime.
  console.log(`The largest prime factor of the objectiveNumber (${objectiveNumber}) is: ${largestP}`);
  console.log('......................................')
  console.log(`The Deconstruction is ${primeFactorizationList}`)



}


main();
