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
    var transactionsString = this.#bankTransactionsToString();
    return 'date || credit || debit || balance' + transactionsString;
  }

  #bankTransactionsToString() {
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
    var day = this.#twoDigitNumber(date.getDate());
    var month = this.#twoDigitNumber(date.getMonth() + 1)
    return `${day}/${month}/${date.getFullYear()}`
  }

  #twoDigitNumber(number) {
    if (number > 9) {
      return String(number)
    }
    else {
      return `0${number}`
    }
  }
}

module.exports = BankStatement;
