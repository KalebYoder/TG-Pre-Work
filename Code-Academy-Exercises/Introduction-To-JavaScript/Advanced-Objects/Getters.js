const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number'){
      return `My current energy level is ${this._energyLevel}`;
    }
    else {
      return "System malfunction: cannot retrieve energy level";
    }
  }
};

console.log(robot.energyLevel);

/*This shows how to create a getter method. Important to notice is that when calling it, you don't include the "get" keyword*/
