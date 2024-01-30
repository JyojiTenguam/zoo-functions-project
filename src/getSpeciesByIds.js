const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (!ids || ids.length === 0) {
    return [];
  }

  const result = data.species.filter((species) => ids.includes(species.id));
  return result;
};

module.exports = getSpeciesByIds;
