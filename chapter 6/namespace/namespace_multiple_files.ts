// file1.ts
namespace SomeNS {
  export let homeworld = "Jakku";
  export somefunc1(){} 
}

// file2.ts
namespace SomeNS {
  export somefunc2(){}
}

// app.ts
SomeNS.somefunc1();
SomeNS.somefunc2();


// This command will compile all js files into one main.js
//tsc --outFile main.js file1.ts file2.ts app.ts

import h = SomeNS.homeworld;

alert(h);
