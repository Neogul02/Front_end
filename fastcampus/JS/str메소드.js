const str = `Hello world!`;

console.log(str.indexOf('world')); // 몇번쨰 있는지
console.log(str.slice(0, 6)); // 슬라이싱
console.log(str.replace('world', 'Heropy')); // 교체

const email = `wlsgud2414@naver.com`;
console.log(email.match(/.+(?=@)/)[0]); // 정규표현식으로 추출

const str_2 = `     HiHi   `
console.log(str_2.trim()) // 공백제거
