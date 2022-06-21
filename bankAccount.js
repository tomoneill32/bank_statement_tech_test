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
    var deposit = new Transaction(transactionDate, amount, 0)
    if (deposit.validDate()) {
      this.#addTransaction(deposit);
    } else {
      console.log('Invalid date');
    }
  }

  withdraw(transactionDate, amount) {
    var withdrawal = new Transaction(transactionDate, 0, amount);
    if (withdrawal.validDate()) {
      this.#addTransaction(withdrawal);
    } else {
      console.log('Invalid date');
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
    })
  }

  #addTransaction(transaction) {
    this.transactions.push(transaction);
    this.#sortTransactionsByDate();
    this.#calculateTransactionBalances();
  }
}

module.exports = BankAccount;
