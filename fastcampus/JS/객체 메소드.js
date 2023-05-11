// non prototype // assign()
console.log('-----------assign-----------');
const userAge = {
  // key: value
  name: 'Heropy',
  age: 85,
};

const userEmail = {
  name: 'Heropy',
  email: 'wlsgud2414@naver.com',
};

const target = Object.assign({}, userAge, userEmail);
console.log(target);
console.log(userAge);
console.log(target === userAge);

// non prototype // keys 객체 속성의 key 값들을 배열 데이터로 반환
console.log('-----------keys-----------');

const user = {
  name: 'Heropy',
  age: 85,
  email: 'wlsgud2414@naver.com',
};
const keys = Object.keys(user);
console.log(keys);
// ['name', 'age', 'email']

console.log(user['email']);

const values = keys.map((key) => user[key]);
console.log(values);
