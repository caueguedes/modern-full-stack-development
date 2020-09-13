abstract class BasePlanet {
  name: String;
  radius: number;
  constructor(inName: string, inRadius: number){
    this.name = inName;
    this.radius = inRadius;
  }
  abstract collapseToBlackHole(inMoreMass: number): void;
  caldDiameter(){
    return this.radius * 2;
  }
}

class Earth extends BasePlanet {
  collapseToBlackHole(inAdditionalMass: number) {
    // logics
  }
}