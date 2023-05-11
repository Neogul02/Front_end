const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

// length, 배열의 길이 반환
console.log(numbers.length);
console.log(fruits.length);
console.log([1, 2].length);
console.log([].length);

// concat, 두개의 배열을 병합한 새로운 배열을 만듦
console.log(numbers.concat(fruits));

// .forEach()

fruits.forEach(function (element, i) {
  console.log(element, i);
});

// .map()

const a = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`);
});
console.log(a);

const b = fruits.map((fruit, index) => ({
  id: index,
  name: fruit,
}));
console.log(b);

// .filter()

const c = numbers.filter((number) => number < 3);
console.log(c);

// .find .findIndex

const d = fruits.find((fruit) => /^C/.test(fruit));
console.log(d);

const e = fruits.findIndex((fruit) => /^C/.test(fruit));
console.log(e);

// .includes(x) x가 배열에 포함되어 있는가?

console.log(numbers.includes(3)); // true
console.log(fruits.includes('GORANY')); // false

// 원본 수정되는 메소드들
// .push()  .unshift()

numbers.push(5); // 맨 뒤에 배열 데이터 추가
console.log(numbers);

numbers.unshift(0); // 맨 앞에 배열 데이터 추가
console.log(numbers);

// .reverse() 배열 뒤집기

console.log(numbers.reverse())
console.log(fruits.reverse())

// .splice(x,y,z) x부터 y개 지우고 z자리에 데이터 넣기

const numbers_2 = [1,2,3,4]
numbers_2.splice(2,1)
console.log(numbers_2)
numbers_2.splice(2,0,999)
console.log(numbers_2)