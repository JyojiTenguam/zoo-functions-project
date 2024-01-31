const data = require('../data/zoo_data');

const countAllSpecies = () =>
  data.species.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {});

const countSpecies = (speciesName) => {
  const species = data.species.find(({ name }) => name === speciesName);
  return species ? species.residents.length : 0;
};

const countSpeciesBySex = (speciesName, sex) => {
  const foundSpecies = data.species.find((specie) => specie.name === speciesName);
  return foundSpecies ? foundSpecies.residents
    .reduce((acc, resident) => acc + (resident.sex === sex), 0) : 0;
};

function countAnimals(animal) {
  if (animal === undefined) {
    return countAllSpecies();
  }

  if (animal.species && animal.sex) {
    return countSpeciesBySex(animal.species, animal.sex);
  }

  if (animal.species) {
    return countSpecies(animal.species);
  }
}

module.exports = countAnimals;
