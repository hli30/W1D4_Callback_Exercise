/* First exercise
-----
*/
var array = [10, 2, 5, 1, 9];

array.sort((a, b) => a - b);

console.log(array);

/* Second exercise
-----
*/
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b) {
  let nameA = a.name;
  let nameB = b.name;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return a.age - b.age;
});

console.log(students);