const Transaction = require('./transaction')

class BankAccount {

  constructor() {
    this.transactions = [];
    this.balance = [];
    this.header = 'date || credit || debit || balance';
  }

  printStatement() {
    this.#calculateBalance();
    var output = this.#setOutput();
    return this.header + output;
  }

  deposit(transactionDate, amount) {
    this.transactions.push(new Transaction(transactionDate, amount, ''));
  }

  #setOutput() {
    return this.transactions.map((transaction) => {
      return `\n${transaction.date} || ${transaction.credit.toFixed(2)} || || ${transaction.balance.toFixed(2)}`;
    }).reverse().join('');
  }

  #calculateBalance() {
    var runningBalance = 0;
    this.transactions = this.transactions.map((transaction) => {
      runningBalance += transaction.credit;
      transaction.balance = runningBalance;
      return transaction;
    })
  }
}

module.exports = BankAccount;
