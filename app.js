// randomly select destination for trip

// randomly select restaurant for trip

// ** mode of transportation

// ** form of entertainment

// want the ability to randonly reselect ** if result is undesirable

// wants the ability to confirm if day trip is complete
// display completed trip in the console

// all single responsibility functions!

// destination
const getRandomValue = (arrayOfDesginations) => {
  let destinations = arrayOfDesginations;
  let randomNum = Math.floor(Math.random() * destinations.length);

  return destinations[randomNum];
};

let destinationsList = ['Austin', 'San Francisco', 'Toronto'];
let destination = getRandomValue(destinationsList);
//

//

//restaurant
const restaurant = (arrayOfRestaurants) => {
  let restaurants = arrayOfRestaurants;
  let randomNum = Math.floor(Math.random() * restaurants.length);

  return restaurants[randomNum];
};

let restaurantList = ['Tacos', 'Burgers', 'Spaghetti'];
restaurant(restaurantList);
//

//

//transportation
const transportation = (modesOfTransportation) => {
  let transportation = modesOfTransportation;
  let randomNum = Math.floor(Math.random() * transportation.length);

  return transportation[randomNum];
};

let transportationList = ['Plane', 'Train', 'Automobile'];
transportation(transportationList);
//

//

// entertainment
const entertainment = (activities) => {
  console.log(activities);
  let randomNum = Math.floor(Math.random() * activities.length);

  return activities[randomNum];
};

let thingsToDo = ['Hiking', 'Sight seeing', 'Beach'];
entertainment(thingsToDo);
//

//
const isComplete = () => {
  let verification = prompt("Is your trip  complete? (Enter 'Yes' or 'No')");

  console.log(verification);
  if (verification === 'Yes') {
    return 'I hope you had a great trip!';
  }
  return 'Your trip is not complete!';
};

isComplete();
//

//
//

//

//

//

//

//

//

//

/*const tripPlanner = (obj) => {
  let randomIndex = Math.floor(Math.random() * 3);
  let destination = obj.destinations[randomIndex];
  let restaurant = obj.restaurants[randomIndex];
  let transportation = obj.transportation[randomIndex];
  let activity = obj.activities[randomIndex];

  console.log(
    `For our trip we are going to take a ${transportation} to ${destination} and we are going to go ${activity} then eat ${restaurant}`
  );
  //return `For our trip we are going to take a(n) ${transportation} to ${destination} and we are going to go ${activity} then eat ${restaurant}`;
};

const data = tripPlanner({
  destinations: ['Austin', 'San Francisco', 'Toronto'],
  restaurants: ['Tacos', 'Burgers', 'Spaghetti'],
  transportation: ['Plane', 'Train', 'Car'],
  activities: ['Hiking', 'Sight seeing', 'to the Beach'],
});

const isComplete = () => {
  let verification = prompt("Is your trip  complete? (Enter 'Yes' or 'No')");

  console.log(verification);
  if (verification === 'Yes') {
    return 'I hope you had a great trip!';
  }
  return 'Your trip is not complete!';
};

isComplete();
*/
