const BankAccount = require('./bankAccount')

describe('BankAccount', () => {
  describe('printStatement', () => {
    it('returns an empty statement with no transactions for an account with no transactions', () => {
      const account = new BankAccount();
      expect(account.printStatement()).toEqual('date || credit || debit || balance');
    })

    it('displays a bank statement with a single deposit', () => {
      const account = new BankAccount();
      account.deposit('10/01/2023',1000);
      expect(account.printStatement()).toEqual('date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00')
    })
    
    it('displays a bank statement with a single deposit for a different amount and date', () => {
      const account = new BankAccount();
      account.deposit('11/02/2022',500.21);
      expect(account.printStatement()).toEqual('date || credit || debit || balance\n11/02/2022 || 500.21 || || 500.21')
    })

  })
})