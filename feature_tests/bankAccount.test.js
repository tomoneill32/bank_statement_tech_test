const BankAccount = require('../bankAccount')
const Transaction = require('../bankTransaction')

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

    it('correctly displays the bank statement with two deposits and one withdrawal', () => {
      const account = new BankAccount();
      account.deposit('10/01/2023',1000);
      account.deposit('13/01/2023',2000);
      account.withdraw('14/01/2023',500);
      expect(account.printStatement()).toEqual('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00')
    })

    it('still correctly displays the statement with the entries entered in a different order', () => {
      const account = new BankAccount();
      account.deposit('13/01/2023',2000);
      account.deposit('10/01/2023',1000);
      account.withdraw('14/01/2023',500);
      expect(account.printStatement()).toEqual('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00')
    })

    it('correctly displays the statement with three different entries', () => {
      const account = new BankAccount();
      account.withdraw('31/01/2023',0.31);
      account.deposit('01/01/2023',500.31);
      account.withdraw('14/02/2023',20);
      expect(account.printStatement()).toEqual('date || credit || debit || balance\n14/02/2023 || || 20.00 || 480.00\n31/01/2023 || || 0.31 || 500.00\n01/01/2023 || 500.31 || || 500.31')
    })
  })
})