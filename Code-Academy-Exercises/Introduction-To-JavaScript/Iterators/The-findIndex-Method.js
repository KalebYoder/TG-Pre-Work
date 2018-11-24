const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(element =>{
  return element==="elephant";
});

const startsWithS = animals.findIndex(element =>{
  return element[0]==="s";
});

/*Here I learned how to return the index of an item in an array meeting a criteria*/
