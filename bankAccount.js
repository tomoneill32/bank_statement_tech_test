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

  deposit(depositDate, amount) {
    var deposit = new Transaction(depositDate, amount, 0);
    var validation = this.#validateTransaction(deposit);
    if (validation) {
      this.#addTransaction(deposit);
    }
  }

  withdraw(withdrawalDate, amount) {
    var withdrawal = new Transaction(withdrawalDate, 0, amount);
    var validation = this.#validateTransaction(withdrawal);
    if (validation) {
      this.#addTransaction(withdrawal);
    }
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
    });
  }

  #addTransaction(transaction) {
    this.transactions.push(transaction);
    this.#sortTransactionsByDate();
    this.#calculateTransactionBalances();
  }

  #validateTransaction(transaction) {
    if (!transaction.validDate()) {
      console.log('Invalid date');
      return false;
    } else if (!transaction.validAmount()) {
      console.log('Invalid amount');
      return false;
    } else {
      return true;
    }
  }
}

module.exports = BankAccount;
