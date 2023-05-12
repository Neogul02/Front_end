import _ from 'lodash';

const users = [
  { userId: '1', name: 'Heropy' }, // 0
  { userId: '2', name: 'Neo' }, // 1
  { userId: '3', name: 'Amy' }, // 2
  { userId: '4', name: 'Evan' }, // 3
  { userId: '5', name: 'Lewis' }, // 4
];

const foundUser = _.find(users, { name: 'Amy' });
const foundUserIndex = _.findIndex(users, { name: 'Amy' });

console.log(foundUser); 
console.log(foundUserIndex) // 배열 인덱스 넘버 반환

_.remove(users, {name : 'Heropy'}) // 특정 요소 지우기
console.log(users)