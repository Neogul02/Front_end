// 변수 유효범위(Variable Scope)
// var, let, const

scope();

function scope() {
  if (true) {
    var a = 123;
  }
  console.log(a);
}

// 형 변환(Type conversion)
// Truthy (참 같은 값)
// true, {}, [], 1,2, 'false', -12, '3.14'

// Falsy (거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN 

if('sadcascqwc'){
  console.log('하이')
}

const a = 1;
const b = "1";

console.log(a == b); // true // 동등연산자 // 되도록 쓰지말자
console.log(a === b); // false // 일치연산자 // 이거쓰자
