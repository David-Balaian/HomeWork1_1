// 1. Create an Author class and a Book class.
// Author should have: name, email, gender. 
// It should have appropriate getters and setters.
// It should have a toString method.

// Book should have: title, author(Author), price, quantity.
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates the profit from the book based on the price and quantity.
// It should have a toString method.

class Author {
	constructor(name, email, gender){
		this._name = name;
		this._email = email; 
		this._gender = gender;
	}
	get name(){
		return this._name;
	}
	set name(val){
		this._name = val;
	}
	get email(){
		return this._email;
	}
	set email(val){
		this._email = val;
	}
	get gender(){
		return this._gender;
	}
	set gender(val){
		this._gender = val;
	}
	toString(){
		return `Name: ${this.name} Email: ${this.email} Gender: ${this.gender}`
	}
}


class book extends Author{
	constructor(name, email, gender, title, price, quantity){
		super(name, email, gender);
		this._title = title;
		this._author = this.name;
		this._price = price;
		this._quantity = quantity;
	}
	get title(){
		return this._title;
	}
	set title(val){
		this._title =val; 
	}
	get price(){
		return this._price;
	}
	set price(val){
		this._price =val; 
	}
	get quantity(){
		return this._quantity;
	}
	set quantity(val){
		this._quantity =val; 
	}
	getProfit(){
		return `Profit: ${this.price * this.quantity}$`
	}
	toString(){
		return `Author: ${this.name} Title: ${this.title} Price: ${this.price}`
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2. Create an Account class. Account should have: id, name, balance.
// It should have setters for name and balance, and getters for all fields.
// It should have a method: credit(amount), which should add amount to balance and return the updated balance.
// It should have a method: debit(amount), which should subtract the amount from the balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
// It should have a method: transferTo(anotherAccount, amount): which should subtract the amount from the account balance and add it to the given anotherAccount and return the updated balance,
// if amount is less than the balance, otherwise output “Amount exceeded balance.”
// It should have a static method: identifyAccounts(accountFirst, accountSecond) which gets two accounts and identifies if they are the same or not comparing all fields.
// It should have toString method.

class Account{
	constructor(id,name,balance){
		this._id = id;
		this._name = name;
		this._balance = balance;
	}
	
	get id(){
		return this._id;
	}
	get name(){
		return this._name;
	}
	set name(val){
		this._name = val;
	}
	get balance(){
		return this._balance;
	}
	set balance(val){
		this._balance = val;
	}
	credit(amount){
		this.balance += amount;
		return this.balance;
	}
	debit(amount){
		if(amount>this.balance){
			return "Amount exceeded balance.";
		}else{
			this.balance -= amount; 
		}
	}
	transferTo(anotherAccount, amount){
		if((anotherAccount instanceof Account) && (!this.debit(amount))){
			anotherAccount.credit(amount);
		}
	}
	static identifyAccounts(accountFirst, accountSecond){
		if((accountFirst instanceof Account) && (accountSecond instanceof Account)){
			for(let prop in accountFirst){
				if(accountFirst[prop] != accountSecond[prop]){
					return "Different Accounts";
				}
			}
			return "Same Accounts";
		}
	}
	toString(){
        return `    ID: ${this.id} 
    Name: ${this.name}
    Balance: ${this.balance}`
	}
}

///////////////////////////////////////////////Using Closure////////////////////////////////////////////////////////////////

class Account{
	constructor(id,name,balance){
		let _id = id;
		this._name = name;
		let _balance = balance;

		this.credit = function (amount){
			_balance += amount;
			return _balance;
		}
		this.debit = function (amount){
			if(amount>_balance){
				return "Amount exceeded balance.";
			}else{
				_balance -= amount;
				return _balance; 
			}
		}
		this.getID = function getid(){
			return _id;
		}
		this.getBalance = function getbalance(){
			return _balance;
		}
	}
	

	get name(){
		return this._name;
	}
	set name(val){
		this._name = val;
	}

	transferTo(anotherAccount, amount){
		if(Account.identifyAccounts(this,anotherAccount) == "Same Accounts"){return false}
		let debit = this.debit(amount)
		if((anotherAccount instanceof Account) && (typeof(debit)==="number")){
			anotherAccount.credit(amount);
			return true;
		}else{
			return debit;
		}
	}
	static identifyAccounts(accountFirst, accountSecond){
		if((accountFirst instanceof Account) && (accountSecond instanceof Account)){
			for(let prop in accountFirst){
				if(accountFirst[prop] != accountSecond[prop]){
					return "Different Accounts";
				}
			}
			return "Same Accounts";
		}
	}
	toString(){
        return `    ID: ${this.getID()} 
    Name: ${this.name}
    Balance: ${this.getBalance()}`
	}
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 3.  Write classes: Person, Student, Staff.
// Person should have: firstName, lastName, gender, age.
// It should have appropriate getters and setters.
// It should have a method: toString().

// Student is inherited from Person. It should have program(array of strings), year, fee.
// It should have appropriate getters and setters. 
// It should have method: passExam(program, grade). Student should contain the data about its programs and exams. passExam will update that data, 
// so if student passed all the exams(grade is great or equal to 50), its year should be increased by one.
// It should have a toString method.

// Teacher is inherited from Person. It should have program(string), pay.
// It should have appropriate getters and setters. 
// It should have a toString method.





class Person {
	constructor(firstName, lastName, gender, age){
		this._firstName = firstName;
		this._lastName = lastName;
		this._gender = gender;
		this._age = age;
	}
	get firstName (){
		return this._firstName;
	}
	set firstName(val){
		this._firstName = val;
	}
	get lastName (){
		return this._lastName;
	}
	set lastName(val){
		this._lastName = val;
	}
	get gender (){
		return this._gender;
	}
	set gender(val){
		this._gender = val;
	}
	get age (){
		return this._age;
	}
	set age(val){
		this._age = val;
	}
	toString(){
		return `Name: ${this.firstName} ${this.lastName} gender: ${this.gender} age: ${this.age}`;
	}
}

//////////////////////////////////////////////////Student////////////////////////////////////////////////////////////////////////////////////////

class Student extends Person{
	constructor(firstName, lastName, gender, age, program, year, fee){
		super(firstName, lastName, gender, age);
		if(Array.isArray(program)&&program.every(item => typeof(item) === "string")){
			this._program = program;
        }else{
			return "program must be array of strings"
		}
		this._year = year; 
		this._fee = fee;
		this._examsGrade = {}; 
	}
	get program(){
		return this._program;
	}
	set program(val){
		if((Array.isArray(val)) && (val.every(item => typeof(item) === "string"))){
			this._program = [...val];
        }else{
			console.log("program must be array of strings");
		}
	}
	get year(){
		return this._year;
	}
	set year(val){
		this._year = val;
	}
	get fee(){
		return this._fee;
	}
	set fee(val){
		this._fee = val;
	}
	get examsGrade(){
		return this._examsGrade;
	}
	set examsGrade(val){
		this._examsGrade = val;
	}
	passExam(program,grade){
		if(this.program.includes(program)){
			if(grade >= 0 && grade<=100){
				this._examsGrade[program] = grade;
				console.log(this.examsGrade);
            }else{
				return "grade must be number from 0 to 100";
			}
		}else{
			return "there are not such exam";
		}
		if(this.program.length == Object.values(this.examsGrade).length){
			let grade = Object.values(this.examsGrade)
					.reduce(((total, item, i, arr) => {
						if(item == arr[i-1]){
							return total = (total + item)/arr.length
						}
						return total += item }),0)
			if(grade >= 50){
				this.year++;
				this.program = [];
				console.log("Student succesfully passed exams. Set new program for next year");
			}else{
				console.log("Student have to pass exams again");
			}
			this.examsGrade = {};
		}
	}
	toString(){
		return `Name: ${this.firstName} ${this.lastName} gender: ${this.gender} age: ${this.age} program: ${this.program} year: ${this.year} fee: ${this.fee}`;
	}
}
//////////////////////////////////////////////////teacher////////////////////////////////////////////////////////////////////////////////////////

class Teacher extends Person {
	constructor(firstName, lastName, gender, age, program, pay){
		super(firstName, lastName, gender, age)
		this._program = program;
		this._pay = pay; 
	}
	get program(){
		return this._program;
	}
	set program(val){
		if(typeof(val) === "string"){
			this._program = val;
		}else{
			console.log("program must be string")
		}
	}
	get pay(){
		return this._pay;
	}
	set pay(val){
		if(typeof(val)==="number"){
			this._pay = val; 
		}
	}
	toString(){
		return `Name: ${this.firstName} ${this.lastName} gender: ${this.gender} age: ${this.age} program: ${this.program} pay: ${this.pay}`;
	}
}