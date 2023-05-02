function sum(a, b) {
  //a,b 는 매개변수
  console.log(a + b);
  return a + b;
}

let a = sum(1, 2); // 1, 2 는 인수
let b = sum(7, 12);
let c = sum(2, 4);

function hello() {
  // 함수 선언
  console.log("Hello~");
}

let world = function () {
  //익명함수
  console.log("World~");
};

hello();
world();

const heropy = {
  name: "jinHyeung",
  age: 23,
  getName: function () {
    // 그래서 이건 메소드다
    // 객체의 속성안에 있는 함수 데이터를 메소드라고 부른다
    return this.name; // this는 heropy를 칭한다
  },
};

const hisName = heropy.getName();
console.log(hisName);

console.log(heropy.getName());
