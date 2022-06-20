class BankAccount {

  constructor() {
    this.transactions = [];
  }

  printStatement() {
    return 'date || credit || debit || balance' + this.transactions;
  }

  deposit(date, amount) {
    amount = amount.toFixed(2);
    this.transactions.push(`\n${date} || ${amount} || || ${amount}`);
  }
}

module.exports = BankAccount;
