const { species, employees } = require('../data/zoo_data');

// Confecção da função para gerar um array de objetos para armazenar as informações do requisito e posteriormente filtrar conforme a entrada de parametros.
// Utilizo a HOF map no array empregados para criar um array contendo o objeto que está na const arr. O id é obtido de forma direta chamar a chave do objeto. O fullName é obtido usando o templante literals para reunir o first name e o full name. O species é obtido utilizando a HOF map para criar um array onde retorna o nome dos animais, quando utilizado junto com a HOF find pelo id e retornando o nome da espécie. o locations utiliza a mesma lógica acima, porém retornamos o local.
const arrayResultado = employees.map((objeto) => {
  const arr = {
    id: objeto.id,
    fullName: `${objeto.firstName} ${objeto.lastName}`,
    species: objeto.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).name),
    locations: objeto.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).location),
  };
  return arr;
});

function getEmployeesCoverage(parametro) {
  // condição para verificar se ao invocar a função sem passar parametro, o retorno será o objeto criado na const arrayResultado.
  if (parametro === undefined) return arrayResultado;
  // verificação para validar a entrada, utilizando a HOF find no arrayResultado, para verificar se o valor do parametro passado esta incluído (seja o nome, sobrenome ou id). Caso não seja um parametro válido, irá retornar undefined e assim, entrará no if que possui o retorno com a mensagem de erro, caso contrário, irá retornar a função conforme solicitado no requisito.
  const validarEntrada = arrayResultado
    .find((element) => element.fullName.includes(Object.values(parametro))
      || element.id.includes(Object.values(parametro)));
  if (validarEntrada === undefined) {
    throw new Error('Informações inválidas');
  }
  return validarEntrada;
}

module.exports = getEmployeesCoverage;
