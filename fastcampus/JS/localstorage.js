const user = {
  name: 'Heropy',
  age: 85,
  emails: ['wlsgud2414@naver.com', 'wlsgud1517@gmail.com'],
};

const str = localStorage.getItem('user'); // 반영구적 저장된 로컬 스토리지에서 가져오기
const obj = JSON.parse(str);
obj.age = 22;
console.log(obj);
localStorage.setItem('user', JSON.stringify(obj));

// localStorage.setItem('user', JSON.stringify(user)); // 로컬 스토리지에 '문자로' 반영구적 저장
// console.log(JSON.parse(localStorage.getItem('user'))); // 로컬 스토리지에서 '객체로'가져오기
// //localStorage.removeItem('user') // 제거
