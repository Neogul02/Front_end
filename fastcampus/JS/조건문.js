import random from "./getRandom";

// 조건문
const a = random();

switch (a) {
  case 0:
    console.log("a is 0");
    break;
  case 2:
    console.log("a is 2");
    break;
  case 4:
    console.log("a is 4");
    break;
  default:
    console.log("rest...");
}

if (a === 0) {
  console.log("a is 0");
} else if (a === 2) {
  console.log("a is 2");
} else if (a === 4) {
  console.log("a is 4");
} else {
  console.log("rest...");
}

let isShow = true;
let checked = false;

if (isShow) {
  //true 이므로 실행
  console.log("Show!");
}

if (checked) {
  //false 이므로 실행 x
  console.log("Checked!");
}

if (isShow){
  console.log("Show!");
}else{
  console.log("Hide!");
}