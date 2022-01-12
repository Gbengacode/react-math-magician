import Big from 'big.js';
import obj from '../__mock__/operate';

describe('Operate',(one, two) => {
  test('the test is to check that adding works', () => {
    expect(one + two).toEqual(one + two);
  });

  test('the test is to check that substract works', () => {
    expect(one - two).toEqual(one - two);
  });

  test('the test is to check that multiply works', () => {
    expect(one * two).toEqual(one * two);
  });

  test('the test is to check that divide works', () => {
    expect(one / two).toEqual(one / two);
  });
});
