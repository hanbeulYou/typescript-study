interface MyDeveloper {
  name: string;
  skill: string;
}

interface MyPerson {
  name: string;
  age: number;
}

function introduce(): MyDeveloper | MyPerson {
  return { name: "Hayou", age: 28, skill: "Typescript" };
}
const hayou = introduce();
// console.log(hayou.skill); // union의 경우 교집합의 타입만 가능
if((hayou as MyDeveloper).skill) {
  console.log((hayou as MyDeveloper).skill);
} else if((hayou as MyPerson).age) {
  console.log((hayou as MyPerson).age);
}

// is를 활용한 타입가드
function isMyDeveloper(target: MyDeveloper | MyPerson): target is MyDeveloper {
  return (target as MyDeveloper).skill !== undefined;
}
function isMyPerson(target: MyDeveloper | MyPerson): target is MyPerson {
  return (target as MyPerson).age !== undefined;
}

if(isMyDeveloper(hayou)) {
  console.log(hayou.skill);
} else {
  console.log(hayou.age);
}