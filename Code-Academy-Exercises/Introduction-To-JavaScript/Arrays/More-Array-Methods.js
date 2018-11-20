const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
groceryList.unshift("popcorn");
const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);

//This showed us how to remove from and add to the beginning of an array, as well as how to get an item or items at an index and find the index of an item.
