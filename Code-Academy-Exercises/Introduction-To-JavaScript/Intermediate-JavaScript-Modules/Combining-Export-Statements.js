export let availableAirplanes= [{
    name: "AeroJet",
    fuelCapacity: 800,
    availableStaff: [
      'pilots',
      'flightAttendants',
      'engineers',
      'medicalAssistance',
      'sensorOperators'
    ],
    maxSpeed: 1200,
    minSpeed: 300
  },
  {
    name: "SkyJet",
    fuelCapacity: 500,
    availableStaff: [
      'pilots',
      'flightAttendants'
    ],
    maxSpeed: 800,
    minSpeed: 200
 }];

export let flightRequirements= {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff){
  if(availableStaff.length >= requiredStaff){
    return true;
  }
  else{
    return false;
  }
}

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange){
  let range = maxSpeed-minSpeed;
  return range > requiredSpeedRange ? true:false;
}

export default meetsSpeedRangeRequirements;

/*Here we see it's possible to mix export types, although the exercise says this is generally not advisable except in very specific use cases.*/
