/* 
const BoxEl = document.querySelector(".box");

console.log(BoxEl);


BoxEl.addEventListener("click", function () {
  console.log("Click!!");
  // 요소의 클래스 정보 객체 활용!
  BoxEl.classList.add("active"); // add, classlist에 'active'를 추가
  // => class='box active'
  let isContains = BoxEl.classList.contains("active");
  //contains 는 있는지 없는지 확인하는 'active'가 있는지? 있다면 true
  console.log(isContains); //true

  BoxEl.classList.remove("active"); // remove, 지우기
  isContains = BoxEl.classList.contains("active"); //확인
  console.log(isContains); //false
}); */

const BoxEls = document.querySelectorAll(".box");

console.log(BoxEls); // 여러개이기때문에 boxEls 는 배열임

BoxEls.forEach(function (BoxEl, index) {
  // 배열의 각 요소에 익명 function을 적용,
  // 그 내용은 각 요소에 class값에 'order 1~4' 넘버링을 부여
  BoxEl.classList.add(`order-${index + 1}`);
  console.log(index, BoxEl);
});

const BoxEl = document.querySelector(".box");
//제일먼저 class='box'인 태그를 가져옴

console.log(BoxEl.textContent); // 값을 얻는 용도

BoxEl.textContent = "유빙방구"; // setter 세터 원하는값으로 변경

console.log(BoxEl.textContent);

let a = "유빙궁둥";

const b = a.split("").reverse().join("");
console.log(b);
