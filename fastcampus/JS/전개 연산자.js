// 전개 연산자 (Spread)

const fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits);
console.og(...fruits);

function toObject(a, b, c) {
  return {
    a: a,
    b: b,
    c: c,
  };
}
console.log(toObject(...fruits))
