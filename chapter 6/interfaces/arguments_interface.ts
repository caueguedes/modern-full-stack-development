function greet(person: any) {
  alert(`Hello, ${person.firstName}`);
}

const person = { firstName : "Frank" };
greet(person);

// Inline contracts
function greet(person: { firstname: string }){
  alert(`Hello, ${person.firstname}`);
}

const person = { name : "Frank" };
greet(person);

// Interfaces
interface IPerson {
  firstname: string;
}

function greet(person: IPerson) {
  alert(`Hello, ${person.firstname}`);
}

function greetLouder(person: IPerson) {
  alert(`HELLO, ${person.firstname}!!!`)
}

const person = { firstName : "Frank", hairColor : "Black" };
greet(person); // WIll WORK

greet({ firstName : "Frank", hairColor : "Black" }) // WILL RAISE ERROR


interface IPerson {
  firstName: string;
  age?: number;  // if your are not using optinal it will been raised error if not passed
};
function greet(person: IPerson) {
  alert(`Hello, ${person.firstName}`);
}
greet({ firstName : "Frank" }); // Okay
