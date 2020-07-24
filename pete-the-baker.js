function cakes(recipe, available) {
  const numberMade = Math.min(...Object.keys(recipe).map(key => Math.floor(available[key] / recipe[key])));
  return numberMade ? numberMade : 0;
}

console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));