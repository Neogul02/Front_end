/*
console.log(typeof "hello World!");
console.log(typeof 123);
console.log(typeof null);

console.log(getType(123));
console.log(getType(false));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));
*/

/*

// 산술 연산자(arithmetic operator)

console.log(1 + 2);
console.log(5 - 2);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);

*/
/*

// 할당 연산자(assignment operator)

let a = 2; // 재할당 불가

a += 1; //a = a + 1;
a -= 1; //a = a - 1;
a *= 1; //a = a * 1;
a /= 1; //a = a / 1;
a %= 1; //a = a % 1;

console.log(a);
*/

/*
// 비교 연산자(comparison operator)

const a = 1;
const b = 3;

console.log(a === b); // 일치 연산자

console.log(a !== b); // 불일치 연산자

console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);

function isEqual(x, y) {
  return x === y;
}

*/

/*

console.log(isEqual(1, 1)); // true
console.log(isEqual(2, "2")); // false

// 논리 연산자 (logical operator)

const a = 1 === 2;
const b = "AB" === "ABC";
const c = false;

console.log(`a : ${a}`);
console.log(`b : ${b}`);
console.log(`c : ${c}`);

console.log("&&: ", a && b && c); // AND 연산자
console.log("||: ", a || b || c); // OR 연산자
console.log("! : ", !a); // NOT 연산자

*/


// 삼항 연산자(ternary operator)

const a = 1 < 2;

if (a) {
  console.log("참");
} else {
  console.log("거짓");
}

console.log(a ? "참" : "거짓");
