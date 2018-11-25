let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = "glorious gold";
spaceship.numEngines = 6;
delete spaceship["Secret Mission"];

/*I think I'm starting to get bracket notation, it's not as complicated as I thought.
Interesting that you don't have to declare a new property as new, just treat it as if you were changing an already existing property.*/
