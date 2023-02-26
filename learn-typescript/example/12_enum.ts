// python의 enumerate 개념
enum Shoes {
  Nike = "나이키",
  Adidas = "아디다스",
}

let myShoes = Shoes.Adidas;
console.log(myShoes);

enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: string) {
  if (answer === Answer.Yes) {
    console.log("정답입니다.");
  }
  if (answer === Answer.No) {
    console.log("오답입니다");
  }
}
// askQuestion("예스");
askQuestion(Answer.Yes);