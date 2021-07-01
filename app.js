// randomly select destination for trip

// randomly select restaurant for trip

// ** mode of transportation

// ** form of entertainment

// want the ability to randonly reselect ** if result is undesirable

// wants the ability to confirm if day trip is complete

// display completed trip in the console

// all single responsibility functions!

// destination
//Math.floor(Math.random() * 10) + 1) // rand 1-10
//Math.floor(Math.random() * 3) // rand 0 - 2 (3 in total, 0 accounting for arr[0])
//const RNG = Math.floor(Math.random() * 3) - 1;

const destination = (arrayOfDesginations) => {
  console.log(arrayOfDesginations);
};

let destinationList = ['Austin', 'San Francisco', 'Toronto'];
destination(destinationList);

//restaurant
const restaurant = (arrayOfRestaurants) => {
  console.log(arrayOfRestaurants);
};

let restaurantList = ['Mexican', 'Burgers', 'Italian'];
restaurant(restaurantList);

//transportation

const transportation = (modesOfTransportation) => {
  console.log(modesOfTransportation);
};

let transportationList = ['Plane', 'Train', 'Automobile'];
transportation(transportationList);

// entertainment

const entertainment = (activities) => {
  console.log(activities);
};

let thingsToDo = ['Hiking', 'Sight seeing', 'Beach'];
entertainment(thingsToDo);
