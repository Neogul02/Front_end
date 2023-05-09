const pi =3.14159265358979

console.log(pi)
const str = pi.toFixed(2) // 소수점 몇번째자리까지 유지, 문자열로 변환
console.log(str)
console.log(typeof(str)) 

const integer = parseInt(str)
const float = parseFloat(str)

console.log(integer)
console.log(float)
console.log(typeof(integer), typeof(float))