function logConstructor(inConstructor: Function) {
  console.log(inConstructor);
}

@logConstructor
class Spaceship {
  constructor() { console.log("constructor"); }
}

const s = new Spaceship();