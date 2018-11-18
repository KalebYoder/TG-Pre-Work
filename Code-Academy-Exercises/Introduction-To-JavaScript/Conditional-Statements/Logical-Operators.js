let mood = 'sleepy';
let tirednessLevel = 6;

if(mood === "sleepy" && tirednessLevel > 8)
  {
    console.log("time to sleep");
  }
else{
  console.log("not bed time yet");
}

//This demonstrates the AND logical operator. If the && was changed to || and you wrapped the entire condition statement with !() you would get "not bed time yet" since one of the conditions is true but the ! operator reverses it.
