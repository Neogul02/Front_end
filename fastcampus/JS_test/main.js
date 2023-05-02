// 함수 복습

/*
function sum() {
  console.log(arguments);
  return arguments[0] + arguments[1]; // arguments는 배열형태로 받아짐
}

console.log(sum(1, 3));
console.log(sum(4, 12));

*/

// 즉시실행함수
// IIFE, Immdediately-Invoked Function Expression

const a = 7;
function double() {
  console.log(a * 2);
}
double();

// () 로 한번 묶어주면 즉시실행
(function () {
  console.log(a * 2);
})();

// 전체 () 묶어도 가능 // 권장!
(function () {
  console.log(a * 2);
}());
