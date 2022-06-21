const BankStatement = require('../bankStatement');

describe('BankStatement', () => {
  describe('returnStatement', () => {
    it('returns a correct statement for three transactions', () => {
      const transactionDoubleOne = { date: new Date('2023-01-10'), credit: 1000, debit: 0, balance: 1000 }
      const transactionDoubleTwo = { date: new Date('2023-01-13'), credit: 2000, debit: 0, balance: 3000 }
      const transactionDoubleThree = { date: new Date('2023-01-14'), credit: 0, debit: 500, balance: 2500 }
      const statement = new BankStatement([transactionDoubleOne, transactionDoubleTwo, transactionDoubleThree]);
      expect(statement.returnStatement()).toEqual('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00');
    })
  })
})