//Our superclass Account
class Account {
    constructor(balance, accountNumber,accountName){
      this.balance = balance;
      this.accountNumber = accountNumber;
      this.accountName = accountName;
    }
  
    deposit(amount){
        this.balance = this.balance + amount;
        //alternative:
        // this.balance += amount;
        console.log("SUCCEEDED");
        return true;
    }
  
    printBalance(){
      console.log(`${this.accountNumber} - ${this.balance}`)
    }
  }
  
  //Checking account inherits from Account
  class CheckingAccount extends Account {
    constructor(balance, accountNumber,accountName){
       super(balance,accountNumber,accountName);
    }
  
    withdraw(amount){
      if(amount > this.balance){
        console.log("ERROR"); 
        return false;
      } else {
        this.balance = this.balance - amount;
        //alternative:
        //this.balance -= amount;
        console.log("SUCCEEDED");
        return true;
      }
    }
  }
  //SavingsAccount inherits from account
  class SavingsAccount extends Account {
    constructor(balance, accountNumber,accountName){
      super(balance,accountNumber,accountName);
     }
  }
  
  //instantiating accounts
  const ca = new CheckingAccount(8000,"DE1234", "MyCheckingAccount");
  const sa = new SavingsAccount(10000,"DE4567","MySavingsAccount");
  //original balance 
  ca.printBalance();

  //testing the checking account
  ca.deposit(1500);
  ca.printBalance();
  ca.withdraw(500);
  ca.printBalance();

  //original balance 
  sa.printBalance();
  
  //testing the savings account
  sa.deposit(1500);
  sa.printBalance();