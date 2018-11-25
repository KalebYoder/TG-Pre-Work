const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const {robotKeys} = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const {robotEntries} = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);

/*This returns undefined for the keys and entries methods, but the assignment is fine with that so I'm not sure if that's normal.
The MDN documentation says it should return the enumerable keys.*/
