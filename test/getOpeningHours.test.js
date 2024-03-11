const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Deverá retornar o objeto completo para nenhum argumento fornecido', () => {
    const result = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(result).toEqual(expected);
  });

  it('Deverá retornar "The zoo is closed" para Monday e 09:00-AM', () => {
    const result = getOpeningHours('Monday', '09:00-AM');
    expect(result).toBe('The zoo is closed');
  });

  it('Deverá retornar "The zoo is open" para Tuesday e 09:00-AM', () => {
    const result = getOpeningHours('Tuesday', '09:00-AM');
    expect(result).toBe('The zoo is open');
  });

  it('Deverá retornar "The zoo is closed" para Wednesday e 09:00-PM', () => {
    const result = getOpeningHours('Wednesday', '09:00-PM');
    expect(result).toBe('The zoo is closed');
  });

  it('Deve lançar uma exceção para Thu e 09:00-AM com a mensagem "The day must be valid. Example: Monday"', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError('The day must be valid. Example: Monday');
  });

  it('Deve lançar uma exceção para Friday e 09:00-ZM com a mensagem "The abbreviation must be \'AM\' or \'PM\'"', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Deve lançar uma exceção para Saturday e C9:00-AM com a mensagem "The hour should represent a number"', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError('The hour should represent a number');
  });

  it('Deve lançar uma exceção para Sunday e 09:c0-AM com a mensagem "The minutes should represent a number"', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError('The minutes should represent a number');
  });
  it('Deve lançar uma exceção para Monday e 13:00-AM com a mensagem "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrowError('The hour must be between 0 and 12');
  });

  it('Deve lançar uma exceção para Tuesday e 09:60-AM com a mensagem "The minutes must be between 0 and 59"', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrowError('The minutes must be between 0 and 59');
  });
});
