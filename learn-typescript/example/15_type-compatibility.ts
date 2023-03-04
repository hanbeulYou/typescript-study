interface ThisDeveloper {
  name: string;
  skill: string;
}

interface ThisPerson {
  name: string;
}


let myDeveloper: ThisDeveloper;
let myPerson: ThisPerson;

myPerson = myDeveloper;
// myDeveloper = myPerson;