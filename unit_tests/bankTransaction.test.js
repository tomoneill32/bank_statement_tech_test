const Transaction = require('../transaction');

describe('Transaction', () => {
  describe('date', () => {
    it('returns a date object matching the date argument passed as a string on creation', () => {
      const transaction = new Transaction('31/12/2021', 1000, 0);
      const expectedOutput = new Date('2021-12-31')
      expect(transaction.date).toEqual(expectedOutput);
    })

    it('returns a date object matching a different date argument passed as a string on creation', () => {
      const transaction = new Transaction('10/01/2023', 1000, 0);
      const expectedOutput = new Date('2023-01-10')
      expect(transaction.date).toEqual(expectedOutput);
    })
  })
})