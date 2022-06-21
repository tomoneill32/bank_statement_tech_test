const Transaction = require('../bankTransaction');

describe('Transaction', () => {
  describe('date', () => {
    it('returns a date object matching the date argument passed as a string on creation', () => {
      const transaction = new Transaction('31/12/2021', 1000, 0);
      const expectedOutput = new Date('2021-12-31');
      expect(transaction.date).toEqual(expectedOutput);
    })

    it('returns a date object matching a different date argument passed as a string on creation', () => {
      const transaction = new Transaction('10/01/2023', 1000, 0);
      const expectedOutput = new Date('2023-01-10');
      expect(transaction.date).toEqual(expectedOutput);
    })
  })

  describe('validDate', () => {
    it('returns false for an invalid date', () => {
      const transaction = new Transaction('25/25/2025',100,0);
      expect(transaction.validDate()).toEqual(false);
    })
    it('returns true for a valid date', () => {
      const transaction = new Transaction('25/01/2025',100,0);
      expect(transaction.validDate()).toEqual(true);
    })
  })

  describe('validAmount', () => {
    it('returns false for a string credit', () => {
      const transaction = new Transaction('25/01/2025','text',0);
      expect(transaction.validAmount()).toEqual(false);
    })

    it('returns false for a string debit', () => {
      const transaction = new Transaction('25/01/2025', 0 , '£30');
      expect(transaction.validAmount()).toEqual(false);
    })
  })
})