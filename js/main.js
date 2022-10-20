const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function (element, i) {
  return array.indexOf(element) === i;
});
console.log(result);