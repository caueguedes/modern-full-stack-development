class Planet {
  constructor() {
    this.name = null;
    this.mass = null;
  }
}

//you can instead do this:

class Planet {
  name: string;
  mass: number;
}

//Initializing classes values -------------------------
class Planet {
  name: string;
  mass: number;
  constructor(inName: string, inMass: number) {
    this.name = inName;
    this.mass = inMass;
  }
}