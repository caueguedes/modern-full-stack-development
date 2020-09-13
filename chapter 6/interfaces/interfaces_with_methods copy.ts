Interface IPerson{
  firstName: string;
  getGretting(lastName: string): string;
};

const person = {
  firstName : "Frank",
  getGretting(lastName: string){
    return `Hello, ${this.firstName} ${lastName}`;
  }
};

function greet(person: IPerson) {
  alert(person.getGretting("Guedes"))
}

greet(person);