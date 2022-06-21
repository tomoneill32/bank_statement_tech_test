const Transaction = require('./bankTransaction');
const BankStatement = require('./bankStatement');

class BankAccount {

  constructor() {
    this.transactions = [];
  }

  printStatement() {
    var statement = new BankStatement(this.transactions);
    return statement.returnStatement();
  }

  deposit(transactionDate, amount) {
    this.transactions.push(new Transaction(transactionDate, amount, 0));
    this.#sortTransactionsByDate();
    this.#calculateTransactionBalances();
  }

  withdraw(transactionDate, amount) {
    this.transactions.push(new Transaction(transactionDate, 0, amount));
    this.#sortTransactionsByDate();
    this.#calculateTransactionBalances();
  }

  #calculateTransactionBalances() {
    var runningBalance = 0;
    this.transactions = this.transactions.map((transaction) => {
      runningBalance = runningBalance + transaction.credit - transaction.debit;
      transaction.balance = runningBalance;
      return transaction;
    })
  }

  #sortTransactionsByDate() {
    this.transactions = this.transactions.sort(function(a,b){
      return a.date -b.date
    })
  }
}

module.exports = BankAccount;
