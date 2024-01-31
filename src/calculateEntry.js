const data = require('../data/zoo_data');

const countEntrants = (entrants) => entrants.reduce((counts, person) => {
  const { age } = person;

  const newCounts = { ...counts };

  if (age < 18) {
    newCounts.child += 1;
  } else if (age >= 18 && age < 50) {
    newCounts.adult += 1;
  } else if (age >= 50) {
    newCounts.senior += 1;
  }

  return newCounts;
}, { child: 0, adult: 0, senior: 0 });

const calculateEntry = (entrants) => {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  const { child = 0, adult = 0, senior = 0 } = countEntrants(entrants) || {};
  const { prices } = data;
  return child * prices.child + adult * prices.adult + senior * prices.senior;
};

module.exports = { calculateEntry, countEntrants };
