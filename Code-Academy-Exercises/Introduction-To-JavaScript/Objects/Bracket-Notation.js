let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
let isActive = spaceship["Active Mission"];
console.log(spaceship[propName]);

/*This introduces bracket notation, which is needed to reference any property with a space in the name. I'm still not comfortable with it, but I'm sure I'll understand more as I use it more*/
