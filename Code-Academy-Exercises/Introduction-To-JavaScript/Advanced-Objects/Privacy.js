const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = "high";
robot.recharge();

/*This shows that unfortunately JavaScript doesn't have any built in protection options for object properties like C++ or Java which means it's possible to change properties you shouldn't.
This can cause property values to be odd, in this case it's appending 30% to the new "high" value for _energyLevel*/
