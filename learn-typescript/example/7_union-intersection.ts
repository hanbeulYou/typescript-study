// function logMessage(value: string) {
//   console.log(value);
// }
// function logMessage(value: number) {
//   console.log(value);
// }
// function logMessage(value: any) {
//   console.log(value);
// }

// # Union 타입 문법 - `any` 보다는 명시적임
// function logMessage(value: string | number) {
//   console.log(value);
// }

function logMessage(value: string | number) {
  if (typeof value === 'string') {
    value.toLocaleUpperCase();
  }
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number')
}

// # Intersection 타입 문법
interface MyDeveloper {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 유니온 타입
// function askSomeone(someone: MyDeveloper | Person) {
//   someone.name; // O
//   // someone.age; // X
// }
// askSomeone({name: "디벨로퍼", skill: "웹 개발"});
// askSomeone({name: "디벨로퍼", age: 10});

// 인터섹션
// function askSomeone(someone: MyDeveloper & Person) {
//   someone.name;
//   someone.skill;
//   someone.age;
// }
// askSomeone({name: "디벨로퍼", skill: "웹 개발", age: 10});