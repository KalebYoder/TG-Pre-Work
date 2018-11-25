const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo(){
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  }
};

console.log(robot.provideInfo());

/*This shows that we need to use the "this" keyword to access properties within the same object in object functions.*/
