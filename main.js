// Your code below.
const makeDino = function (newSpecies, newPeriod, newCarnivore, newExtinct = false) {
  return {
      species: newSpecies,
      period: newPeriod,
      carnivore: newCarnivore,
      extinct: newExtinct,
    };
};

const makeExtinct = function (dino) {
  return makeDino(dino.species, dino.period, dino.carnivore, true);
};

const truncateSpecies = function (dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
  if(newDino.species.length >= 10) {
    newDino.species = newDino.species.slice(0,7) + '...';
  }
  return newDino;
};

const makeSingular = function (dino) {
  if(dino.species.endsWith('us')) {
    return makeDino(dino.species.slice(0,-2), dino.period, dino.carnivore, dino.extinct)
  } else {
    return dino;
  }
};





// Our code below; DO NOT TOUCH!
if (typeof makeDino === 'undefined') {
  makeDino = undefined;
}

if (typeof makeExtinct === 'undefined') {
  makeExtinct = undefined;
}

if (typeof truncateSpecies === 'undefined') {
  truncateSpecies = undefined;
}

if (typeof makeSingular === 'undefined') {
  makeSingular = undefined;
}


module.exports = {
  makeDino,
  makeExtinct,
  truncateSpecies,
  makeSingular,
}
