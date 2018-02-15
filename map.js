var words = ["ground", "control", "to", "major", "tom"];

var testOne = map(words, function(word) {
  return word.length;
});

var testTwo = map(words, function(word) {
  return word.toUpperCase();
});

var testThree = map(words, function(word) {
  return word.split('').reverse().join('');
});

function map(arr, callback) {
  let array = [];
  for(let i = 0; i < arr.length; i++) {
    array.push(callback(arr[i]));
  }
  return array;
}

console.log(testOne);
console.log(testTwo);
console.log(testThree);


