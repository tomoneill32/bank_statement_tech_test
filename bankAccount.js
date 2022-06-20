class BankAccount {

  constructor() {
    this.transactions = [];
    this.balance = [];
  }

  printStatement() {
    this.#calculateBalance();
    var output = this.#setOutput();
    return 'date || credit || debit || balance' + output.reverse().join('');
  }

  deposit(transactionDate, amount) {
    this.transactions.push({date: transactionDate, credit: amount, debit: '', balance: amount});
  }

  #setOutput() {
    return this.transactions.map((transaction) => {
      return `\n${transaction.date} || ${transaction.credit.toFixed(2)} || || ${transaction.balance.toFixed(2)}`;
    })
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
