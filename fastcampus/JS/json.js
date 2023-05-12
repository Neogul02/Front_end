// JSON (JavaScript Object Notation)
// 자바스크립트의 객체 표기법, 객체데이터와 유사,

import myData from './myData.json';

console.log(myData);

const user = {
  name: 'Heropy',
  age: 25,
  emails: ['wlsgud2414@naver.com', 'wlsgud1517@gmail.com'],
};
console.log('user : ', user);

const str = JSON.stringify(user); // json 파일은 문자 데이터화
console.log('str : ', str);
console.log(typeof str);

const obj = JSON.parse(str);
console.log('obj : ', obj);

// - JSON의 기본 자료형 -
// 수(Number)
// 문자열(String): 0개 이상의 유니코드 문자들의 연속. 문자열은 큰 따옴표(")로 구분하며 역슬래시 이스케이프 문법을 지원한다.
// 참/거짓(Boolean): true 또는 false 값
// 배열(Array): 0 이상의 임의의 종류의 값으로 이루어진 순서가 있는 리스트. 대괄호로 나타내며 요소는 쉼표로 구분한다.
// 객체(Object): 순서가 없는 이름/값 쌍의 집합으로, 이름(키)이 문자열이다.
// null: 빈 값으로, null을 사용한다
