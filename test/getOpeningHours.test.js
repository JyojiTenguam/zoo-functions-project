const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Deverá retornar  "The zoo is closed" para Monday e 09:00-AM', () => {
    const result = getOpeningHours('Monday', '09:00-AM');
    expect(result).toBe('The zoo is closed');
  });
  it('Deverá retornar  "The zoo is closed" para Tuesday e 09:00-AM', () => {
    const result = getOpeningHours('Tuesday', '09:00-AM');
    expect(result).toBe('The zoo is open');
  });
  it('Deverá retornar  "The zoo is closed" para Wednesday e 09:00-AM', () => {
    const result = getOpeningHours('Wednesday', '09:00-PM');
    expect(result).toBe('The zoo is closed');
  });
  it('Deve lançar uma exceção para Thu and 09:00-AM com a mensagem "The day must be valid."', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError('The day must be valid.');
  });

  it('Deve lançar uma exceção para Friday and 09:00-ZM com a mensagem "The abbreviation must be \'AM\' or \'PM\'"', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Deve lançar uma exceção para Saturday and C9:00-AM com a mensagem "The hour should represent a number"', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError('The hour should represent a number');
  });

  it('Deve lançar uma exceção para Sunday and 09:c0-AM com a mensagem "The minutes should represent a number"', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError('The minutes should represent a number');
  });
});
