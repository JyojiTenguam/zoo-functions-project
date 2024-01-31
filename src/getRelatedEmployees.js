const { employees } = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(id) {
  if (id === stephanieId || id === olaId || id === burlId) {
    return employees.some((manager) => manager.id === id);
  }
  return false;
}

function getRelatedEmployees(managerId) {
  const resultado = isManager(managerId);
  if (resultado !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((employee) => employee.managers
    .some((value) => value === managerId))
    .map((names) => `${names.firstName} ${names.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
