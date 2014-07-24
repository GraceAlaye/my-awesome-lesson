#!/usr/bin/env node

// TODO 1 : Create a varible called welcome message

var welcomeMessage = "Marvel vs DC Universe ";
console.log(welcomeMessage);

// TODO 2 : Create a varible called person

var person = {};   
console.log(person); 

// TODO 3 : Add firsname and lastname properites to your player

person.firstName = " The "; 
person.lastName = "Hulk ";

console.log("First Name: " + person.firstName); 
console.log("Last Name: " + person.lastName);

// TODO 4 : Add a status to your player using array syntax

person["status"] = "The Hulk ";
console.log("status: " + person.status); 

// TODO 5 : Create a function that prints a quote of the character 
person.Speak = function () { 
  console.log("Hulk Smash");
}
person.Speak();