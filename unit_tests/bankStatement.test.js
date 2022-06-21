const BankStatement = require('../bankStatement');

describe('BankStatement', () => {
  describe('returnStatement', () => {
    it('returns a correct statement for three transactions', () => {
      const transactionDoubleOne = { reformatTransaction: () => '\n10/01/2023 || 1000.00 || || 1000.00' };
      const transactionDoubleTwo = { reformatTransaction: () => '\n13/01/2023 || 2000.00 || || 3000.00' };
      const transactionDoubleThree = { reformatTransaction: () => '\n14/01/2023 || || 500.00 || 2500.00' };
      const statement = new BankStatement([transactionDoubleOne, transactionDoubleTwo, transactionDoubleThree]);
      expect(statement.returnStatement()).toEqual('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00');
    })
  })
})