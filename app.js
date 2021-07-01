// randomly select destination for trip

// randomly select restaurant for trip

// ** mode of transportation

// ** form of entertainment

// want the ability to randonly reselect ** if result is undesirable

// wants the ability to confirm if day trip is complete
// display completed trip in the console

// all single responsibility functions!

// destination
const destination = (arrayOfDesginations) => {
  let destinations = arrayOfDesginations;
  let randomNum = Math.floor(Math.random() * destinations.length);

  return destinations[randomNum];
};

let destinationsList = ['Austin', 'San Francisco', 'Toronto'];
destination(destinationsList);
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
const isComplete = () => {};

isComplete();
//

//

//random trip planner!
const trueAdventure = () => {};

// re roll! // reselect if you dont like what you got the first time
const reRoll = () => {};
