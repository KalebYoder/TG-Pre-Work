class HospitalEmployee{
  constructor(name){
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name(){
    return this._name;
  }

  get remainingVacationDays(){
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff){
    this._remainingVacationDays -= daysOff;
  }
}

/*This creates what will be a parent class for the Doctor and Nurse classes. These methods and properties will all be automatically provided to the child classes*/
