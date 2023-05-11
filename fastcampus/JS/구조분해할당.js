// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당

const user = {
  name: 'Heropy',
  age: 22,
  email: 'wlsgud2414@naver.com',
  address: 'USA',
};

const { name: heropy, age, email, address } = user;
// E,g, user.address
// 객체의 구조 분해 를 해서 변수처럼 사용가능하게 만들어줌

console.log(`사용자의 이름은 ${heropy}입니다.`);
console.log(`${heropy}의 나이는 ${age} 입니다.`);
console.log(`${heropy}의 이메일은 ${email}입니다.`);
console.log(address);

const fruits = ['Apple', 'Banana', 'Cherry']; // 배열은 순서대로 indexing
const [a, b, c, d] = fruits;
console.log(a, b, c, d);
