const robotFactory = (model, mobile) => {
  return{
    model: model,
    mobile: mobile,
    beep: function(){
      console.log("Beep Boop");
    }
  }
}

const tinCan = robotFactory("P-500", true);
tinCan.beep();

/*This shows how to use a factory function to create an object from a template.
Note it's possible to create methods that don't have arguments provided as well.*/
