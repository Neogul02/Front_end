export default function (data) { // default
  return Object.prototype.toString.call(data).slice(8, -1);
}
