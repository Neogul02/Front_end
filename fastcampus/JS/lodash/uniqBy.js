import _ from 'lodash';

const usersA = [
  { userId: '1', name: 'Heropy' },
  { userId: '2', name: 'Neo' },
];

const usersB = [
  { userId: '1', name: 'Heropy' },
  { userId: '3', name: 'Amy' },
];

const usersC = usersA.concat(usersB); // 합쳐서 C 에 new Array
console.log('concat : ', usersC); // concat 은 중복되게 합침
console.log('uniqBy : ', _.uniqBy(usersC, 'userId'));
// uniqBy 는 하나의 배열에서 고유화 작업

const usersD = _.unionBy(usersA, usersB, 'userId');
console.log('unionBy : ', usersD);
// unionBy 는 여러개의 배열에서 고유화