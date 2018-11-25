const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
const {functionality} = robot;
functionality.beep();

//It's strange to me that you can get the functionality property without specifying it like robot.functionality.
//Perhaps this is related to the shorthand from the previous lesson? It's not mentioned in the narrative.
