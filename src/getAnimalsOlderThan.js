const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const species = data.species.find((specie) => specie.name === animal);

  if (!species) {
    // Se a espécie não for encontrada, consideramos que não há animais dessa espécie
    return false;
  }

  // Verificamos se todos os animais têm a idade mínima especificada
  return species.residents.every((animals) => animals.age >= age);
};

module.exports = getAnimalsOlderThan;
