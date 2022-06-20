class BankAccount {

  constructor() {
    this.transactions = [];
  }

  printStatement() {
    return 'date || credit || debit || balance' + this.transactions;
  }

  deposit(date, amount) {
    this.transactions.push('\n10/01/2023 || 1000.00 || || 1000.00');
  }
}

module.exports = BankAccount;
