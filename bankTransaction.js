class Transaction {

  constructor(date, credit, debit) {
    this.date = this.#StringToDate(date);
    this.credit = Number(credit);
    this.debit = Number(debit);
    this.balance = null;
  }

  #StringToDate(dateString) {
    var reformattedString = dateString.split('/').reverse().join('-');
  return new Date(reformattedString);
  }

  reformatTransaction() {
    var credit = this.#reformatNumber(this.credit);
    var debit = this.#reformatNumber(this.debit);
    var date = this.#reformatDate(this.date);
    return `\n${date} || ${credit}|| ${debit}|| ${this.balance.toFixed(2)}`;
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
    return `0${number}`
  }

  validDate() {
    return !isNaN(this.date);
  }

  validAmount() {
    return (!isNaN(this.credit) && !isNaN(this.debit));
  }
}

module.exports = Transaction;