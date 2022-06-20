const BankAccount = require('./bankAccount')
const Transaction = require('./transaction')

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

    it('correctly displays the bank statement with two deposits one after the other', () => {
      const account = new BankAccount();
      account.deposit('10/01/2023',1000);
      account.deposit('13/01/2023',2000);
      expect(account.printStatement()).toEqual('date || credit || debit || balance\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00')
    })

  })
})