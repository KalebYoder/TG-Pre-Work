import Airplane from './airplane';

function displayFuelCapacity(){
  Airplane.availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
};

displayFuelCapacity();

/*This shows us how to use the import statement rather than the require statement.*/
