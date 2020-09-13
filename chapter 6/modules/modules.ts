// MyModule.ts
// Variable
export let captain = "Picard";

// Interface
export interface CaptainChecker {
  isGreat(inName: string): boolean;
}

// Function
// export function addFirst(inLast: string): string {
//   return "Jean luck " + inLast;
// }
function addFirst(inLast: string): string {
  return "Jean Luc " + inLast;
}
export addFirst;
// export { addFirst as myAddFirstFunc }

// Class 
export class Ship {
  const name = "Enterprise";
}

//  Type alias
export type cap = captain;

// Using It
Import { addFirst } from "./MyModule"

// npm install --save systemjs

// add to the html file
// <script src="./node_modules/systemjs/dist/system.js"></script>

// add a configuration file system.js
//SystemJS.config({ baseURL : "/",
// packages : { "/" : { defaultExtension : "js" } }
// });
// SystemJS.import("app.js");