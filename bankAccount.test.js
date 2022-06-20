const BankAccount = require('./bankAccount')

describe('BankAccount', () => {
  describe('printStatement', () => {
    it('returns an empty statement with no transactions for an account with no transactions', () => {
      const account = new BankAccount();
      expect(account.printStatement()).toEqual('date || credit || debit || balance');
    })
  })
})