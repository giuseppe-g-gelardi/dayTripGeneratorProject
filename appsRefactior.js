const tripPlanner = (obj) => {
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
