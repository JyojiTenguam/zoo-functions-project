const handlerElephants = require('../src/handlerElephants');

describe('Testes da função handlerElephants', () => {
  it('Deve retornar a quantidade de elefantes', () => {
    const result = handlerElephants('count');
    expect(result).toBe(4);
  });

  it('Deve retornar um array com nomes de elefantes contendo "Jefferson"', () => {
    const result = handlerElephants('names');
    expect(result).toContain('Jefferson');
  });

  it('Deve retornar a média de idade dos elefantes', () => {
    const result = handlerElephants('averageAge');
    expect(result).toBeCloseTo(10.5);
  });

  it('Deve retornar a localização dos elefantes dentro do Zoológico', () => {
    const result = handlerElephants('location');
    expect(result).toEqual('NW');
  });

  it('Deve retornar a popularidade dos elefantes', () => {
    const result = handlerElephants('popularity');
    expect(result).toBeGreaterThanOrEqual(5);
  });

  it('Deve retornar um array com a relação de dias em que é possível visitar os elefantes sem incluir "Monday"', () => {
    const result = handlerElephants('availability');
    expect(result).toEqual(expect.not.arrayContaining(['Monday']));
  });

  it('Deve retornar undefined ao não passar argumentos', () => {
    const result = handlerElephants();
    expect(result).toBeUndefined();
  });

  it('Deve retornar uma mensagem de erro ao passar um objeto vazio como argumento', () => {
    const result = handlerElephants({});
    expect(result).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Deve retornar null ao passar uma string que não corresponde a uma funcionalidade', () => {
    const result = handlerElephants('invalid');
    expect(result).toBeNull();
  });
});
