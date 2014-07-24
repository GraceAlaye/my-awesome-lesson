My awesome app
=======================
A blurb about my lesson...

# Installation

### On runnable.com:
Create a new node app, and from the terminal, enter or cut and paste the following commands, then press enter or return:
    
    git clone https://github.com/GraceAlaye/my-awesome-lesson.git spark && spark/setup.sh
    
...some text will fly by as the repository is cloned locally and the project is setup.

Great, you're set to roll!




**TODO 1 :** Here, you will create a variable called welcome message and name it after your favorite video game. 
In this step this is the first thing that will be displayed.



This is how you format code:
```javascript
#!/usr/bin/env node

// TODO 1 : Create a variable called welcome message 
var welcomemessage = "";
console.log(welcomemessage);
```
** TODO 2 :** Here you will create a person. This is our player and later on you'll get to name your person.

```javascript
#!/usr/bin/env node

// TODO 2 : Create a varible called person. 

var person = {};   
console.log(person); 
```

**TODO 3 :**  Now let us give it some idenity! In this step we are going to add a fisrt and last name to our player.
```javascript
#!/usr/bin/env node
// TODO 3 : Add firsname and lastname properites to your player

person.firstName = "  "; 
person.lastName = " "; 
console.log("First Name: " + person.firstName); 
console.log("Last Name: " + person.lastName);
```

** TODO 4 :** lets give our player a cool status, what are they known as. In this step we are going to just throw in a 
cool status for our player and this will print out what they are commonly known as.
```javascript
#!/usr/bin/env node 

// TODO 4 : Add a status to your player using array syntax

person["status"] = " ";
console.log("status: " + person.status); 
```
** TODO 5 :** Lets give our character an awesome quote, so we just say what they always say. A slogan of sorts.
In this step  we are just adding  a quote to our player. After we complete this step it will print out all of our information .
Go try it and complete your app!
```javascript
#!/usr/bin/env node
// TODO 5 : Create a function that prints a quote of the character 
person.sayHello = function () { 
  console.log("");
}
person.sayHello();
```
.

**Run the App** Switch to the command line, and go ahead and run the app like so:
And this is how you put a box around your text:

    # ./my-lesson.js


&copy; John Fraboni 2014