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
    this.transactions.push(new Transaction(transactionDate, amount, 0));
  }

  withdraw(transactionDate, amount) {
    this.transactions.push(new Transaction(transactionDate, 0, amount));
  }

  #setOutput() {
    return this.transactions.map((transaction) => {
      var credit = ''
      if (transaction.credit !== 0) {
        credit = transaction.credit.toFixed(2) + ' ';
      }
      var debit = ''
      if (transaction.debit !== 0) {
        debit = transaction.debit.toFixed(2) + ' ';
      }
      return `\n${transaction.date} || ${credit}|| ${debit}|| ${transaction.balance.toFixed(2)}`;
    }).reverse().join('');
  }

  #calculateBalance() {
    var runningBalance = 0;
    this.transactions = this.transactions.map((transaction) => {
      runningBalance += transaction.credit;
      runningBalance -= transaction.debit;
      transaction.balance = runningBalance;
      return transaction;
    })
  }
}

module.exports = BankAccount;
