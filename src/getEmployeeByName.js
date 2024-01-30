const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  const foundEmployee = data.employees.find(
    (employee) =>
      employee.firstName.toLowerCase() === employeeName.toLowerCase()
      || employee.lastName.toLowerCase() === employeeName.toLowerCase(),
  );

  return foundEmployee;
};

module.exports = getEmployeeByName;
