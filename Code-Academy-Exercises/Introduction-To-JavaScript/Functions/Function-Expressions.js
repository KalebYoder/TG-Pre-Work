const plantNeedsWater = function(day){
  if(day === "Wednesday"){
    return true;
  }
  else{
    return false;
  }
}

console.log(plantNeedsWater("Tuesday"));

//This introduces the concept of anonymous functions, which are functions without a name that instead assign directly to a variable and are called by the variable name.
