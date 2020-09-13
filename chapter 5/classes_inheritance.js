// class Planet {
//   private name: string = "none";
//   protected mass: number;
//   constructor(inName: string, inMass: number) {
//     this.name = inName;
//     this.mass = inMass;
//   }
//   public printName() {
//     alert(this.name);
//   }
// }

class Jupiter extends Planet {
  private colorBands: boolean = true;
  constructor(){
    super("Jupiter", 1234);
  }
}

let j: Jupiter = new Jupiter();

// protected mass: number = 5555;
// if you protect properties into parent class u will not be able to overwrite it into it's child

// overloading throw optional parameters
public calcSuperMass(massMultiple?: number): number {
  if (massMultiple) {
    return this.mass * massMultiple;
  }
  return this.mass * 2;
}
// Or default parameterss:
public calcSuperMass(massMultiple: number = 2): number {
  return this.mass * massMultiple;
}