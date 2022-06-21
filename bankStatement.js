class BankStatement {

  constructor(transactions) {
    this.transactions = transactions;
    this.statement = this.#createStatement();
  }

  returnStatement() {
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
      var date = this.#reformatDate(transaction.date)
      return `\n${date} || ${credit}|| ${debit}|| ${transaction.balance.toFixed(2)}`;
    }).reverse().join('');
  }

  #reformatNumber(debit) {
    if (debit !== 0) {
      return debit.toFixed(2) + ' ';
    } else {
      return '';
    }
  }

  #reformatDate(date) {
    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    return `${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`
  }
}

module.exports = BankStatement;