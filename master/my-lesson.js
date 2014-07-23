#!/usr/bin/env node

// TODO 1 : Create a varible called welcome message

var welcomemessage = "";
console.log(welcomemessage);

// TODO 2 : Create a varible called person

var person = {};   
console.log(person); 

// TODO 3 : Add firsname and lastname properites to your player

person.firstName = "  "; 
person.lastName = " ";

console.log("First Name: " + person.firstName); 
console.log("Last Name: " + person.lastName);

// TODO 4 : Add a status to your player using array syntax

person["status"] = " ";
console.log("status: " + person.status); 

// TODO 5 : Create a function that prints the firstname lasntname and status of your player along with a quote 
person.sayHello = function () { 
  console.log("");
}
person.sayHello();