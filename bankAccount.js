const Transaction = require('./bankTransaction');
const BankStatement = require('./bankStatement');

class BankAccount {

  constructor() {
    this.transactions = [];
    this.balance = [];
    this.header = 'date || credit || debit || balance';
  }

  printStatement() {
    this.#sortByDate();
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

  #sortByDate() {
    this.transactions = this.transactions.sort(function(a,b){
      return a.date -b.date
    })
  }
}

module.exports = BankAccount;
