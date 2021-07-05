const getRandomValue = (array) => {
  let randomNum = Math.floor(Math.random() * array.length);

  console.log(array[randomNum]);
  return array[randomNum];
};
let restaurantList = ['Tacos', 'Burgers', 'Spaghetti'];
let transportationList = ['Plane', 'Train', 'Automobile'];
let thingsToDo = ['Hiking', 'Sight seeing', 'Beach'];
let destinationsList = ['Austin', 'San Francisco', 'Toronto'];

getRandomValue(restaurantList);
getRandomValue(transportationList);
getRandomValue(thingsToDo);
getRandomValue(destinationsList);

const isComplete = () => {
  let verification = prompt("Is your trip  complete? (Enter 'Yes' or 'No')");

  console.log(verification);
  if (verification === 'Yes') {
    return 'I hope you had a great trip!';
  }
  return 'Your trip is not complete!';
};

isComplete();
