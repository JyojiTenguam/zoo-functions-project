const data = require('../data/zoo_data');

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const geralZoo = () => {
  const objeto = daysOfWeek.reduce((acc, elem) => {
    acc[elem] = {
      officeHour: `Open from ${data.hours[elem].open}am until ${data.hours[elem].close}pm`,
      exhibition: data.species
        .filter((animal) => animal.availability.includes(elem))
        .map((a) => a.name),
    };
    return acc;
  }, {});

  objeto.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return objeto;
};

const getSchedule = (scheduleTarget) => {
  if (data.species.some((animal) => animal.name === scheduleTarget)) {
    const foundAnimal = data.species.find((animal) => animal.name === scheduleTarget);
    return foundAnimal.availability;
  }
  if (scheduleTarget === undefined || !daysOfWeek.includes(scheduleTarget)) {
    return geralZoo();
  }
  if (daysOfWeek.includes(scheduleTarget)) {
    return { [scheduleTarget]: geralZoo()[scheduleTarget] };
  }
};

module.exports = getSchedule;
