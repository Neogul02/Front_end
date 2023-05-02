// () => {} vs function(){}

const double = function (x) {
  return x * 2;
};

const double_Arrow = (x) => {
  return x * 2;
};
// ===
const double_Arrow_2 = (x) => x * 2;
// ===
const double_Arrow_3 = (x) => x * 2;

console.log(`double: ${double(2)}`);
console.log(`double_Arrow: ${double_Arrow(2)}`);
console.log(`double_Arrow_2: ${double_Arrow_2(2)}`);
console.log(`double_Arrow_3: ${double_Arrow_3(2)}`);
