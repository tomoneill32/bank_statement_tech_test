# Bank Statement Tech Test

## Set up instructions

```
git clone https://github.com/tomoneill32/bank_statement_tech_test.git
cd bank_statement_tech_test
npm install
node
```
----
## Usage instructions

From the directory, initiate node with 
``` 
node
```

Within node

```
const BankAccount = require('./bankAccount');
```

You can then create an account, deposit money in, withdraw money and view a bank statement. For example:

```
const account = new BankAccount();
account.deposit('25/06/2022',600);
account.withdraw('26/06/2022',100);
account.printStatement();
```

The bank statement will be printed to the console, ordered in reverse order by transaction date and the correct balance on each transaction regardless of the order in which the transactions were created. 

To deposit and withdraw, a date must be given along with an amount. The date should be passed as a string in the format 'dd/mm/yyyy', the amount deposited/withdrawn as a number, if the date format is incorrect or the amount given is not a number the transaction will not be added and a message will be passed to the console.

---

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```
