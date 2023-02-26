// 자바스크립트 함수 선언
// function sum(a, b) {
//   return a + b;
// }

// 타입스크립트 함수 선언 - 함수의 매개 변수
// function add(a: number, b: number) {
//   return a + b;
// }

// 타입스크립트 함수 선언 - 함수의 반환 타입
function add(a: number, b: number): number {
  return a + b;
}

// 인자의 개수도 제한
// add(10, 20, 30, 40)

// number + number 을 string 으로 리턴할 수 없음.
// function add(a: number, b: number): string {
//   return a + b;
// }

// 함수 인자
function log(a: string) {
  console.log(a);
}
// log('a', 10);

// 함수 옵셔널 파라미터(optional parameter)
// 넣을 수도 있는 놈들엔 ? 붙이기
function printText(text: string, type?: string) {
  console.log(text);
}
printText('hi');
