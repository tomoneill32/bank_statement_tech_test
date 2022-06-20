class Transaction {

  constructor(date, credit, debit) {
    this.date = date;
    this.credit = credit;
    this.debit = debit;
    this.balance = null;
  }
}

module.exports = Transaction;