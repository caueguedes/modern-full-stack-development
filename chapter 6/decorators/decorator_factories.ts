function logConstructorFactory(inEnabled: boolean) {
  if (inEnabled) {
    return function(inConstructor: Function) {
      console.log(inConstructor);
    }
  }else {
    return function() {};
  }
}

@logConstructorFactory(true) 
class Spaceship {
  constructor() { console.log("Spaceship constructor");}
}

@logConstructorFactory(false)
class SpaceStation {
  constructor() { console.log("SpaceStation constructor");}
}

const s = new Spaceship();
const t = new SpaceStation(); 