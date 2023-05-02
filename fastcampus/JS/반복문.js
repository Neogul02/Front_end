// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건){

const ulEl = document.querySelector("ul");
console.log(ulEl);

for (let i = 0; i < 5; i += 1) {
  const li = document.createElement("li");
  li.textContent = `list-${i + 1}`;
  if ((i + 1) % 2 === 0) {
    // 짝수
    li.addEventListener("click", function () {
      console.log(li.textContent);
    });
  }
  ulEl.appendChild(li);
}
