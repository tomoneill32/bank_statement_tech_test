class BankAccount {

  constructor() {
    this.transactions = [];
    this.balance = [];
  }

  printStatement() {
    this.calculateBalance();
    var output = this.#setOutput();
    return 'date || credit || debit || balance' + output.reverse().join('');
  }

  deposit(transactiondate, amount) {
    this.transactions.push({date: transactiondate, credit: amount, debit: '', balance: amount});
  }

  #setOutput() {
    return this.transactions.map((transaction) => {
      return `\n${transaction.date} || ${transaction.credit.toFixed(2)} || || ${transaction.balance.toFixed(2)}`;
    })
  }

  calculateBalance() {
    var runningBalance = 0;
    this.transactions = this.transactions.map((transaction) => {
      runningBalance += transaction.credit;
      return { date: transaction.date, credit: transaction.credit, debit: transaction.debit, balance: runningBalance };
    })
  }
}

module.exports = BankAccount;
