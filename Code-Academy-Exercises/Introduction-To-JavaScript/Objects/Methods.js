let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat () {
  console.log(retreatMessage);
  },
  takeOff () {
    console.log("Spim... Borp... Glix... Blastoff!");
  }
};

alienShip.retreat();
alienShip.takeOff();

/*I'm still tripping up on putting an = after the object name, I'm not used to treating it like a variable.
I think I need to think of it like an abbreviated Java declaration, where I don't have to say new objectName.*/
