console.log('Solution Script Linked');

async function solveProblem(){
  console.log('Solving!');
  $userDesireCount = document.getElementById('userInput').value;
  console.log($userDesireCount)
  $userDesireCount = parseInt($userDesireCount);
  let currentNumber = 0 ;
  let sum=0;

  while (currentNumber < $userDesireCount){
    //Create a grey element with the name of the current number.

    //Mount to DOM

    if(currentNumber % 3 === 0 || currentNumber % 5 === 0){
      sum+=currentNumber;
      //turn the element green
    }else{
      //Turn the element red
    }

    //remove the element from DOM
    console.log(sum);
    currentNumber++;

    //Create the Final Output for Answer
    await WAIT1SEC();
    document.getElementById('solution').innerHTML = `${sum}` ;
  }

}


function WAIT1SEC(){
  setTimeout(function(){
    console.log("waited 1 sec");
  }, 1000);

}
