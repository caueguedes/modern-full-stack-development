class Planet {
  private name: string = "none";
  protected mass: number;
  constructor(inName: string, inMass: number) {
    this.name = inName;
    this.mass = inMass;
  }
  public printName() {
    alert(this.name);
  }
}