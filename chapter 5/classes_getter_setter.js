class Planet {
  private _name: string = "No name set";
  get name() {
    return `This planet's name is '${this._name}'.`;
  }
  set name(inName: string) {
    if (inName === "Pluto") {
      this._name = "Not a planet";
    } else {
      this._name = inName;
    }
  }
}

let p: Planet = New Planet();
alert(p.name); // No name set
p.name = "Pluto";
alert(p.name); // Not a planet
p.name = "Venus";
alert(p.name) // Venus


// Read only properties
class Planet {
  readonly name: string = "No name set";
}
let p: Planet = new Planet();
alert(p.name); // Okay
p.name = "Neptune"; // Error