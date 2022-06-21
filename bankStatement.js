const Transaction = require('./bankTransaction');

class BankStatement {

  constructor(transactions) {
    this.transactions = transactions;
    this.statement = this.#createStatement();
  }

  returnStatement() {
    console.log(this.statement);
    return this.statement;
  }

  #createStatement() {
    var transactionsString = this.#bankTransactionsReformat();
    return 'date || credit || debit || balance' + transactionsString;
  }

  #bankTransactionsReformat() {
    return this.transactions.map((transaction) => {
      return transaction.reformatTransaction();
    }).reverse().join('');
  }
}

module.exports = BankStatement;
