// Write your code below
let bobsFollowers= ["Jeff", "Joe", "Cory", "Dawn"];
let tinasFollowers= ["Jeff", "Joe", "Cindy"];
let mutualFollowers= [];

for(let i=0; i<bobsFollowers.length; i++){
  for(let j=0; j<tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

//This shows how to nest loops within loops in order to work with two sets of incrementing data.
