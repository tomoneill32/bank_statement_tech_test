const BankAccount = require('../bankAccount')
const Transaction = require('../bankTransaction')

describe('BankAccount', () => {
  describe('printStatement', () => {
    let account;

    beforeEach(() => {
      account = new BankAccount();
    })

    it('returns an empty statement with no transactions for an account with no transactions', () => {
      expect(account.printStatement()).toEqual('date || credit || debit || balance');
    })

    it('displays the correct bank statement for a single deposit', () => {
      account.deposit('10/01/2023',1000);
      expect(account.printStatement()).toEqual('date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00')
    })
    
    it('displays the correct bank statement for a different deposit', () => {
      account.deposit('11/02/2022',500.21);
      expect(account.printStatement()).toEqual('date || credit || debit || balance\n11/02/2022 || 500.21 || || 500.21')
    })

    it('displays the correct statement for two deposits', () => {
      account.deposit('10/01/2023',1000);
      account.deposit('13/01/2023',2000);
      expect(account.printStatement()).toEqual('date || credit || debit || balance\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00')
    })

    it('displays the correct statement for two deposits and one withdrawal', () => {
      account.deposit('10/01/2023',1000);
      account.deposit('13/01/2023',2000);
      account.withdraw('14/01/2023',500);
      expect(account.printStatement()).toEqual('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00')
    })

    it('displays the correct statement for three transactions entered in the wrong order', () => {
      account.deposit('13/01/2023',2000);
      account.deposit('10/01/2023',1000);
      account.withdraw('14/01/2023',500);
      expect(account.printStatement()).toEqual('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00')
    })

    it('displays the correct statement for three different transactions', () => {
      account.withdraw('31/01/2023',0.31);
      account.deposit('01/01/2023',500.31);
      account.withdraw('14/02/2023',500);
      expect(account.printStatement()).toEqual('date || credit || debit || balance\n14/02/2023 || || 500.00 || 0.00\n31/01/2023 || || 0.31 || 500.00\n01/01/2023 || 500.31 || || 500.31')
    })
  })
})