// 인터페이스
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
myDeveloper = myPerson;

// 함수
let add = function(a: number): number {
  return a;
}
let sum = function(a: number, b: number): number {
  return a+b;
}

sum = add;
// add = sum;

// 제네릭
interface Empty<T> {
  // ..
}

let empty1: Empty<string>;
let empty2: Empty<string>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;