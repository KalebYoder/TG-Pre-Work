const robot = {
  energyLevel: 100,
  checkEnergy: function () {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

/*This explains that you shouldn't use arrow functions inside an object because they automatically work at global scale, so they aren't associated with an object to use the "this" keyword.*/
