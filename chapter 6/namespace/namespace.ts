namespace MyFirstNamespace {
  export let homeworld = "Jakku";
  export function sayName() {
    alert("Hey");
  };
}

alert(MyFirstNamespace.homeworld);
MyFirstNamespace.sayName();

namespace MySecondNamespace {
  export class Jedi {}
  export interface RebelScum {}
}