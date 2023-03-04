// 타입 단언(type assertion)
let anyA: any;
anyA = 20;
anyA = "20";
// 타입스크립트 너는 신경쓰지 말아라! 내가 더 잘 안다!
let b = a as string;

// DOM API 조작
const myDiv = document.querySelector("div");
if(myDiv) myDiv.innerText = "";
// 타입 단언 때리기
const myDivAs = document.querySelector(".container") as HTMLDivElement;
myDivAs.innerText = "";