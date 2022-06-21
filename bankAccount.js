const Transaction = require('./transaction');
const BankStatement = require('./bankStatement');

class BankAccount {

  constructor() {
    this.transactions = [];
    this.balance = [];
    this.header = 'date || credit || debit || balance';
  }

  printStatement() {
    this.#calculateBalance();
    var statement = new BankStatement(this.transactions);
    return statement.returnStatement();
  }

  deposit(transactionDate, amount) {
    this.transactions.push(new Transaction(transactionDate, amount, 0));
  }

  withdraw(transactionDate, amount) {
    this.transactions.push(new Transaction(transactionDate, 0, amount));
  }

  #calculateBalance() {
    var runningBalance = 0;
    this.transactions = this.transactions.map((transaction) => {
      runningBalance = runningBalance + transaction.credit - transaction.debit;
      transaction.balance = runningBalance;
      return transaction;
    })
  }
}

module.exports = BankAccount;
