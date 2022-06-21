class Transaction {

  constructor(date, credit, debit) {
    this.date = this.#dateStringToObject(date);
    this.credit = credit;
    this.debit = debit;
    this.balance = null;
  }

  #dateStringToObject(dateString) {
    var reformattedString = dateString.split('/').reverse().join('-');
  return new Date(reformattedString);
  }
}

module.exports = Transaction;