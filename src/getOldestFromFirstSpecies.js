const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idPrimeiroAnimal = data.employees.find((func) => func.id === id).responsibleFor[0];
  const animalObj = data.species.find((specie) => specie.id === idPrimeiroAnimal).residents;  
  return Object.values(animalObj.sort((a, b) => a.age - b.age)[animalObj.length - 1]);
}

module.exports = getOldestFromFirstSpecies;
