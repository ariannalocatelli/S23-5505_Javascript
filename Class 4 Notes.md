#### SESSION #4
# SYNTAX: OBJECTS

## 1 OBJECTS
An object in JavaScript is a self-contained set of related values and functions.
At its basic level, it's an organizing concept used to hold related data and functions together.	But Javascript allows a lot more flexibility with Objects.
Javascript comprises of primitives (string, number, boolean, undefined, null)...the rest are based  on Objects. 
Arrays are types of objects
Functions are types of objects
Creating custom objects: literals
Defining object methods
JSON - a special type of string.

```
Create an Object using the Constructor Method:
const new_string = new String('Hello');
const my_date = new Date();
```
Properties:
```
new_string.length;
new_array.length;
```

Methods:
```new_string.toUpperCase();
new_array.sort();
USING OBJECTS
```
## 2 BUILT-IN OBJECT TYPES

String Object:
```let string1 = new String("Hello"); 
let string2 = new String(123);
let string3 = "This is me. "; //preferred
```
String Property:
string2.length;

String Methods:
string3.indexOf(pattern, start_position);		string3.charAt(4);
string3.substring(start_position, end_position);	
string3.trim();




## 3 BUILT-IN OBJECT TYPES

Number Object:
```let first_number = new Number(123);
let second_number = new Number(123.567);
let third_number = 123.59; //preferred
```
Number Methods:
```second_number.toFixed(); 	
second_number.toString();	
Number.isNaN(second_number);
Number.isInteger(second_number);
Number.parseInt(second_number);
Number.parseFloat(second_number);
Number.isFinite( 300/0 ); //ES6
```

## 4 BUILT-IN OBJECT TYPES

Math Object: built-in and is ready to be called:
```let big_number = Math.PI; //constant
let pos_number = Math.abs(-23);
let sign_number = Math.sign(-23);
let sm_number = Math.floor(4.2);
let int_number = Math.round(4.5);
let pow_number = Math.pow(3,2);
let rand_number = Math.random();
```

## 5 BUILT-IN OBJECT TYPES

Date Object: handling all date/time calculations
```const the_date = new Date(); // actual stored value: 1663699591294
const the_date1 = new Date("31 January 2014");
```
Date Methods:
```the_date.getTime()
the_date.getDate()
the_date.getDay()
the_date.getFullYear()
the_date.toDateString()
the_date.toLocaleDateString('en-US')
...

## 6 BUILT-IN OBJECT TYPES

Array Object:
```const my_array = new Array('test', 2, 4);
const my_array =['test', 2, 4];
```
Array Property:
```my_array.length;```

Array Methods:
```my_array.push(9);			
my_array.sort();
my_array.concat(second_array);
my_array.forEach(function() {} );
my_array.map(function() {} );
```


## 7 CUSTOM OBJECTS

Custom Object: like arrays but more flexible as it can encapsulate all of an entity's values and properties and methods to use in it.
```
// Constructor method:
const person = new Object();
// Literal method:
const person = {}; //preferred
```
Add Properties:
```
person.firstName = "John";
person.lastName  = "Parsons";
```

Add Methods:
```person.sayHello = function() {
  console.log("My name is " + person.firstName + " " + this.lastName;
}
person.sayHello();
```

## 8 CUSTOM OBJECTS

```
const person = {
firstName: "John",
			lastName: "Parsons",
			citiesLived: ["New York", "Boston", "Vien"],
			sayHello: function() {
console.log("My name is " + this.firstName + " " + this.lastName);
}
};
```

## 9 CUSTOM OBJECTS

More compact approach for methods with ES6:
```
const person = {
firstName: "John",
			lastName: "Parsons",
			citiesLived: ["New York", "Boston", "Vien"],
			sayHello() {
        console.log("My name is " + this.firstName + " " + this.lastName);
      }
};
```


## 10 CUSTOM OBJECTS

Dynamic property names
```const person = { 
firstName: "John" , 
lastName:"Parsons", 
["Alias + Math.random() + "Name"]: "Johnny" 
};
```

```console.log(person);```
> => {	firstName: "John" , 
lastName:"Parsons", 
Alias0.998158537860917Name: "Johnny" }

Dynamic values:
```const person = { firstName: "John" , lastName:"Parsons", "Wealth": (return_amount > 10**6) ? true : false };
```


## 11 CUSTOM OBJECTS

Accessing:
```
person.firstName;

//OR
person["firstName"];
person["Alias Name"];
```

Updating:
```
person.firstName = "Abraham";
```

## 12 CUSTOM OBJECTS

Looping through all properties: use for-in loop
```for( const key in person ) {
  console.log( key + ': ' + person[key] );
}```

Check if property exists:
```if ( 'firstName' in person ) {...};

person.hasOwnProperty( 'firstName' );
```
```
//ES2017 only
for ( const key of Object.keys( person ) ) {
console.log( key );
}
for( const value of Object.values( person ) ) {
console.log( value );
}
```

## 13 CUSTOM OBJECTS

Looping through all properties and values:
```
// ES 2017 only
for( const item of Object.entries( person ) ) {
  console.log( `${item[0]}'s value is ${item[1]}` );
}
```

## 14 CUSTOM OBJECTS

Destructuring: easy way to extract multiple values from data
```
const [ x, y ] = array( 7, 3 );
const obj = { first: 'Jane', last: 'Doe' }; 
const {first: f, last: l} = obj;
const {first, last} = obj; //shorter
```

Simplifying the Object.entries loop:
```for( const [key, value] of Object.entries( person ) ) {
  console.log( `${key}'s value is ${value}` );
}```

Removing a property:
```delete person.alias
```


## 15 CUSTOM OBJECTS

Nested Objects:
```const family = {
  dad: { realName: "John Denver" },
  mom: { realName: "Katie McGraw" },
  son: { realName: 'Lawrence Holly" }
}

family.dad.realName;
family.dad["realName"];
```

## 16 CUSTOM OBJECTS

Object vs. Primitives: 
objects are assigned by reference
variable assigned to an object will simply refer to the exact same memory space
any changes made using either reference will affect the same object

```
const person = { 
  name: 'Thor',
  weapon: "Axe"
};
const clonePerson = person;
clonePerson.name = Sif;
person.name; // returns Sif
```
```
// a way around:
const obj = {};
Object.assign(obj, person);
```

## 17 FUNCTION PARAMS - USING OBJECTS

Useful when handling a large number of parameters to a function
Order of params doesn't matter since properties in an object are not in a particular order
```const person = { 
  name: 'Thor',
  weapon: "Axe"
};

function greet(person_param) {
  return `My name is ${person_param.name} and I wield the ${person_param.weapon}`; 
}
// or with defaults:
function greet( { name = "Hulk, weapon = "fist" } ) {
  return `My name is ${name} and I wield the ${weapon}`; 
}
```


## 18 ONE MORE BUILT-IN OBJECT TYPE

JSON Object: a cross-platform format used for exchanging information between web services
```const json_person = '{
 "firstName": "John",
 "lastName": "Parsons"
}';
```

JSON Methods:
```
JSON.parse(json_person);
JSON.stringify(person);
```

## 19 THE CONCEPT OF THIS

keyword this refers to the object from within. 
used inside methods to gain access to the object’s own properties

```
const person = {
    firstName: "John",
    lastName: "Adams",
    fullName: function () {
    	// One way of writing this:​
        console.log(person.firstName + " " + person.lastName);
        ​// preferred - using this to access own property
        console.log(this.firstName + " " + this.lastName);
    }
}
```

## 20 `CREATE THROUGH TEMPLATES

Using objects as a template to create more objects
**SImple Object Generation Constructor
```function createPerson(firstName, lastName) {
  const obj = {
    firstName: first_name,
    lastName: lastName,
    getFullName: function() {
      return this.firstName + " " + this.lastName
    },
    greet: function(person) {
      console.log("Hello, I'm " + this.getFullName());
    }
  };
  return obj;
}

const person1 = createPerson("John", "Parsons");
const person2 = createPerson("Jane", "Wright");
person1.greet();
```

## 21 CREATE THROUGH TEMPLATES

**The Official Constructor approach:**
```
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.greet = function () {
        console.log("I am a " + this.make + " " + this.model);
    }
}
const car1 = new Car('Nissan', '300ZX', 1992);
const car2 = new Car('Mazda', 'Miata', 1990);
car1.greet();
car2.greet();
```

## 22 CREATE THROUGH OBJECT.CREATE

Object Create syntax:
```const Person = {
  firstName: 'Skoda',
  lastName: 'VW',
  getFullName: function() {  
    return this.firstName + " " + this.lastName
  }
};

//create a new Person
const person1 = Object.create(Person);
person1.firstName = 'Bentley'; person1.getFullName();
```





## 23 MORE WAYS TO CREATE

ES6:
```class Person {
  constructor(firstName = "", lastName = "") {
this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() { 
    return this.firstName + " " + this.lastName
  }
};

//create a new Person
const person1 = new Person('Bentley', 'VW');
person1.getFullName();
```

## 24 EXERCISE

Create a Dice object
create a "side" property that can be changed on definition
create a method that rolls the dice and returns a number between 1 and the side.

—---

create 2 instances of dice, one with 6 sides and one with 12 sides and run the methods on each.

