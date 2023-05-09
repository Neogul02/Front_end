function user(first, last) {
  this.firstName = first;
  this.lastName = last;
}
user.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}

const heropy = new user('Heropy', 'Park');
const amy = new user('Amy', 'Clarke');
const neo = new user('Neo', 'Smith');

console.log(heropy);
