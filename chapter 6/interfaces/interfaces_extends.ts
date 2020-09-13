Interface IPerson{
  firstName: string;
}

Interface INinja extends IPerson {
  numberOfSwords: number;
}
 
let ninja = {} as INinja;
ninja.firstName = "Ryuki";
ninja.numberOfSwords = 2;
  