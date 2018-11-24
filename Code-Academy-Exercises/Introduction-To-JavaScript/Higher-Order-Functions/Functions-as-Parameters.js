const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below

let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

function checkConsistentOutput(fun, myVar){
  if(fun(myVar) === fun(myVar)){
    return fun(myVar);
  }
  else{
    return "This function returned inconsistent results";
  }
}

checkConsistentOutput(addTwo, 5);

//This one tripped me up a bit, I forgot that when calling a function assigned as a variable you shouldn't put paranthesis after the variable name.
