/* 1. Define a number variable (can be random) and then create a condition to check if that variable  is odd or even. */

let n = Math.floor(12 * Math.random());
if (n%2 ) {
  console.log(n + " is an odd number");
} else {
  console.log(n + " is an even number");
}

/* 2. Conditions/Random:
 * Use the below rolling dice generator to create a random number between 1 and 6. 
 * Then write a condition to check that number and do something for each check eg. return the value back to console using console.log(...). 
 * Consider using the switch operator for it - see below for an interesting use of skipping the break expression!
 */

let rolled = Math.ceil( Math.random() * 6 );
console.log(rolled);
switch (rolled) {
  case (1):
  case (2):
  case (3):
  case (4):
    console.log("You rolled a number less than four");
    break;
  case (5):
    console.log("You rolled perfect middle five");
    break;
  case (6):
    console.log("You rolled the max six");
    break;
  default:
    console.log("You rolled a number less than four");
    break;
}

/* 3.  Loops:
 * Find the factorial  of any number using loops. Start with a number (random or fixed) and find its factorial. 
 * A factorial is a number you get by multiplying all the numbers preceding it, 
 * starting with 1 eg. factorial of 5 is 1  * 2 * 3 * 4 * 5 = 1204. 
 */

let num = 10;
let result = 1;

for (let i=1; i <= num; i++) {
  result = result * i;
}
console.log(result);

// approach 2: using recursive
let num = 10;
function fact(num) {
  if (num > 0) {
    return num * fact(num-1);
  } else {
    return 1;
  }
}
console.log('factorial of ' + num + ' is: ',fact(5));


