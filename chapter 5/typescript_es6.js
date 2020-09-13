// Use let and const
function test() {
  if (true) {
    var greeting = "hello";
  }
  alert(greeting);
}
test();

// Arrow function
const test = () => {
  alert(`Hello, ${name}`);
}
test("Jack");

const addNums = (a, b) => a + b;
alert(addNums(2, 3));

const addNums = (a: number, b: number): number => a + b;
alert(addNums(2, 3));

// Template literals
alert(`Hello, ${name.toUpperCase().substr(2)}`);

// Default Parameters
const multNums = (a: number, b: number = 10): number => a * b;
alert(multNums(2));

// Spread and Rests
const addNums = (a: number, b: number): number => a + b;
const nums: number[] = [1, 2];
alert(addNums(...nums)); //will raise error

  // solve as optinal values
  const addNums = (a?: number, b?: number): number => a + b;
  // other solutions spread the value
  const addNums = (...a: number[]): number => a.reduce((acc, val) => acc + val);
  const nums: number[] = [ 5, 6 ];
  alert(addNums(...nums)); 

// Destructuring
const person = {
  firstName : "Billy", lastName : "Joel", age : 70
};

// Objects
const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;

const { firstName, lastName, age } = person;


// list of values
const vals = [ "Billy", "Joel", 70 ];
const [ firstName, lastName, age ] = vals;

alert(firstName);
alert(lastName);
alert(age);

// switching values 
let x = 1;
let y = 2;
[ x, y ] = [ y, x ];

alert(x); // 2
alert(y); // 1