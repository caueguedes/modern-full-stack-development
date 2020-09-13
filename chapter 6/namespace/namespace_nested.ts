namespace SomeNS {
  export namespace InnerNS {
    export someFunc() {}
  }
}

import sf = SomeNS.InnerNS.someFunc;

alert(sf());