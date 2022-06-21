class BankStatement {

  constructor(transactions) {
    this.transactions = transactions;
    this.statement = this.#createStatement();
  }

  returnStatement() {
    console.log(this.statement);
    return this.statement
  }

  #createStatement() {
    var output = this.#setOutput();
    return 'date || credit || debit || balance' + output;
  }

  #setOutput() {
    return this.transactions.map((transaction) => {
      var credit = this.#reformatNumber(transaction.credit);
      var debit = this.#reformatNumber(transaction.debit);
      return `\n${transaction.date} || ${credit}|| ${debit}|| ${transaction.balance.toFixed(2)}`;
    }).reverse().join('');
  }

  #reformatNumber(debit) {
    if (debit !== 0) {
      return debit.toFixed(2) + ' ';
    } else {
      return '';
    }
  }
}

module.exports = BankStatement;