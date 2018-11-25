let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
function greenEnergy(obj){
  obj["Fuel Type"] = "avocado oil"
}

function remotelyDisable(obj){
  obj.disabled = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);

/*This shows that the object's properties can be changed or added to through functions, but not by redefining the object*/
