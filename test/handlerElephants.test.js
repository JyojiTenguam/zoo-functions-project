const handlerElephants = require('../src/handlerElephants');

describe('Testes da função handlerElephants', () => {
  it('Deve retornar a quantidade de elefantes', () => {
    const result = handlerElephants('count');
    expect(result).toBe(4); // Adaptar conforme a lógica real dos seus dados
  });

  it('Deve retornar um array com nomes de elefantes', () => {
    const result = handlerElephants('names');
    expect(result).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']); // Adaptar conforme a lógica real dos seus dados
  });

  it('Deve retornar a média de idade dos elefantes', () => {
    const result = handlerElephants('averageAge');
    expect(result).toBeCloseTo(10.5); // Adaptar conforme a lógica real dos seus dados
  });

  it('Deve retornar a localização dos elefantes dentro do Zoológico', () => {
    const result = handlerElephants('location');
    expect(result).toEqual('NW'); // Adaptar conforme a lógica real dos seus dados
  });

  it('Deve retornar a popularidade dos elefantes', () => {
    const result = handlerElephants('popularity');
    expect(result).toBe(5); // Adaptar conforme a lógica real dos seus dados
  });

  it('Deve retornar um array com a relação de dias em que é possível visitar os elefantes', () => {
    const result = handlerElephants('availability');
    expect(result).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']); // Adaptar conforme a lógica real dos seus dados
  });

  it('Deve retornar undefined ao não passar argumentos', () => {
    const result = handlerElephants();
    expect(result).toBeUndefined();
  });
});
