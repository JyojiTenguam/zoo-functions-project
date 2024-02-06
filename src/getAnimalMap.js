const { species } = require('../data/zoo_data');

function getAnimalNames(location, includeNames, sorted, sex) {
  return species
    .filter((animal) => animal.location === location)
    .map((animal) => {
      const residents = sex ? animal.residents
        .filter((resident) => resident.sex === sex) : animal.residents;

      if (includeNames) {
        const dataToReturn = {
          [animal.name]: residents.map((resident) => resident.name),
        };

        if (sorted) {
          dataToReturn[animal.name] = dataToReturn[animal.name].sort();
        }

        return dataToReturn;
      }

      return animal.name;
    });
}

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;

  const animalMap = ['NE', 'NW', 'SE', 'SW'].reduce((acc, location) => {
    acc[location] = getAnimalNames(location, includeNames, sorted, sex);
    return acc;
  }, {});

  return animalMap;
}

module.exports = getAnimalMap;
