# Classes inheritance 
In this assignment we will be practicing classes and the use of inheritance.
For this we're going to build a Banking app.

We would like to support **2** types of bank accounts:
 - Savings account
 - Checking account

Important we can only withdraw from the checking account, we can't withdraw directly from the 
savings account.

Use the `index.js` file to write your code in. 

First of all we need to create a super class 

## 1. Creating the `Account` super class :
The Account class will reperesent our superclass (parent). 

### 1.1 Create an `Account` class that contains the following properties: 
   - a `balance` as Number 
   - an `accountNumber` as String
   - an `accountName` as String

   The constructor should take the following parameters 
```javascript
 constructor(balance, accountNumber, accountName){
  this.balance = balance; 
  ...
 }
```

### 1.2 Add a `deposit(amount)` method to the `Account` class. 
We want to be able to deposit into all types of accounts, so we will add this method to the superclass.
Add a `deposit(amount)` method which allows you to deposit a certain amount into the account. 

**HINT:**
```javascript
  this.balance = this.balance + amount;
```

### 1.3 Add a `printBalance()` method to the `Account` class. 
We want to display the current balance easily. Add a printBalance method to the class which prints the current balance.

Example: 

`DE1234 - €5000`

**HINT**
```javascript
  printBalance(){

  }
```

## 2. Creating the `CheckingAccount` class 
The `CheckingAccount` class will have the possibility of withdrawing an amount from the account. Let's go ahead and implement this logic. 

### 2.1 Creating the `CheckingAccount` class:
Create a new class called `CheckingAccount`:
- Make sure the CheckingAccount is inheriting from the Account class. 

**HINT:**

```javascript
 class ClassB extends ClassA {

 }
```
- The constructor should take the following parameters
```javascript
 constructor(balance, accountNumber, accountName){
  super(balance, accountNumber,accountName)

 }
```
### 2.2 Add a `withdraw(amount)` method to the `CheckingAccount` class.   
We wanted to be able to withdraw an amount from the checking account but not from the savings. So we will add this method to the subclass (child). 

Write a `withdraw(amount)` method which allows the user to withdraw a certain amount from the account. 

- Make sure to check if there's enough balance to withdraw this amount.

**EXAMPLE:** 
```javascript
 withdraw(amount){
    if(amount > this.balance){
        ...
        console.log("ERROR");
        return false;
    } else {
        //subtract amount from the balance 
        ...
        console.log("SUCCEEDED");
        return true;
    }
 }
```


## 3. Creating the `SavingsAccount` class 
The `SavingsAccount` class will have the possibility to deposit money but not to withdraw money. this has already been implemented in the superclass. 

### 3.1 Creating the `SavingsAccount` class:
- Make sure the SavingsAccount is inheriting from the Account class.  In the future we might add other properties or methods to the `SavingsAccount`. 

**HINT:** 

```javascript
 class ClassB extends ClassA {

 }
```
- The constructor should take the following parameters
```javascript
 constructor(balance, accountNumber, accountName){
  super(balance, accountNumber,accountName)

 }
```



# 4 Test the application
 - Create two accounts a CheckingAccount and a SavingsAccount 
 - Deposit and withdraw money

 
```javascript
   const ca = new CheckingAccount(8000,"DE1234", "MyCheckingAccount")
   const sa = new SavingsAccount(10000,"DE4567", "MySavingsAccount")

   //testing the checking account
   ca.deposit(1500);
   ca.printBalance();
   ca.withdraw(500);
   ca.printBalance();

   //testing the savings account
   sa.deposit(1500);
   sa.printBalance();
```
   
