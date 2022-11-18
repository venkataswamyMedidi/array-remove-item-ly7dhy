import _ from "lodash";
// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let users = [
  { id: 1, name: "ted" },
  { id: 1, name: "ted" },
  { id: 1, name: "bob" },
  { id: 3, name: "sara" },
  { id: 4, name: "test" },
  { id: 4, name: "test" },
  { id: 5, name: "abc" },
  { id: 6, name: "abc" },
  { id: 7, name: "test2" },
  { id: 8, name: "test1" },
  { id: 8, name: "test1" }
];
let array = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];

//array methods

//1.pop - remove last item
let arraypoptest = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let users1 = [
  { id: 1, name: "ted" },
  { id: 2, name: "mike" },
  { id: 3, name: "bob" },
  { id: 4, name: "sara" }
];
let testpop = arraypoptest.pop();
let testpop1 = users1.pop();
console.log("array popMehtod", testpop, arraypoptest);
//10
[2, 1, 2, 5, 6, 7, 8, 9, 9];
console.log(
  "array of objects pop",
  JSON.stringify(testpop1),
  JSON.stringify(users1)
);

//2. shift - remove first item
let users2 = [
  { id: 1, name: "ted" },
  { id: 2, name: "mike" },
  { id: 3, name: "bob" },
  { id: 4, name: "sara" }
];
let arrayshifttest = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let testshift = arrayshifttest.shift();
let testshift1 = users2.shift();
console.log("array shift", testshift, arrayshifttest);
console.log("array of objects shift", testshift1, users2);
//2 [1, 2, 5, 6, 7, 8, 9, 9, 10]

//3. slice
let users3 = [
  { id: 1, name: "ted" },
  { id: 2, name: "mike" },
  { id: 3, name: "bob" },
  { id: 4, name: "sara" }
];
let arrayslicetest = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let testslice = arrayslicetest.slice(0, 3);
let testslice1 = users3.slice(0, 3);
console.log("array slice", testslice, arrayslicetest); //not changed original array
console.log("array of objects shift", testslice1, users3); //not changed original array
//[2, 1, 2] [2, 1, 2, 5, 6, 7, 8, 9, 9, 10]
//4. splice
let users4 = [
  { id: 1, name: "ted" },
  { id: 2, name: "mike" },
  { id: 3, name: "bob" },
  { id: 4, name: "sara" }
];
let arraysplicetest = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let testsplice = arrayslicetest.splice(0, 3);
let testspice1 = users3.splice(0, 3);
console.log("array splice", testsplice, arraysplicetest); //not changed original array
console.log("array of objects splice", testsplice, users4); //not changed original array
//[2, 1, 2] [2, 1, 2, 5, 6, 7, 8, 9, 9, 10]
//5. remove specific value using splice
let arr = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let users5 = [
  { id: 1, name: "ted" },
  { id: 2, name: "mike" },
  { id: 3, name: "bob" },
  { id: 4, name: "sara" }
];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    arr.splice(i, 1);
  }
}

for (var i = 0; i < users5.length; i++) {
  if (users5[i].name === "ted") {
    users5.splice(i, 1);
  }
}
console.log("splice with specific value", arr);
console.log("splice with specific value array of objects", users5);
//[2, 1, 2, 6, 7, 8, 9, 9, 10]
//shorthand
let users6 = [
  { id: 1, name: "ted" },
  { id: 2, name: "mike" },
  { id: 3, name: "bob" },
  { id: 4, name: "sara" }
];
let arrShorthand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let val = arr.indexOf(5);
arrShorthand.splice(val, 1);
var removeIndex = users6.map(item => item.id).indexOf(1);

users6.splice(removeIndex, 1);
console.log("splice shorthand specific value", arrShorthand);
console.log("splice shorthand specific value array of objects", users6);
//[1, 2, 3, 4, 5, 6, 7, 8, 9]
//6. using filter method
let users7 = [
  { id: 1, name: "ted" },
  { id: 2, name: "mike" },
  { id: 3, name: "bob" },
  { id: 4, name: "sara" }
];
let testarr = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let testarr2 = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let filtered = testarr.filter(function(value, index, arr) {
  return value > 5;
});
let filtered2 = testarr2.filter(item => item !== 2);
let filterObj = users7.filter(item => item.id !== 2);
console.log("filter example 1", filtered);
//[6, 7, 8, 9, 9, 10]
console.log("filter example 2", filtered2);
//[1, 5, 6, 7, 8, 9, 9, 10]
console.log("filter example array of objects", filterObj);
// remove multiple values using filter

let forDeletion = [2, 3, 5];

let mularr = [1, 2, 3, 4, 5, 3];

mularr = mularr.filter(item => !forDeletion.includes(item));
console.log("multiple value deletion with filter", mularr);
//[1, 4]
//7. delete operator

let ar = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
delete ar[4]; // delete element with index 4

console.log(ar);
//[2, 1, 2, 5, undefined, 7, 8, 9, 9, 10]
//8. lodash remove
let users8 = [
  { id: 1, name: "ted" },
  { id: 2, name: "mike" },
  { id: 3, name: "bob" },
  { id: 4, name: "sara" }
];
let arrlodashtest = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let evens = _.remove(arrlodashtest, function(n) {
  return n % 2 == 0;
});
let evensObj = _.remove(users8, function(n) {
  return n.id % 2 == 0;
});
console.log("lodash remove array", arrlodashtest);
//[1, 5, 7, 9, 9]
console.log("lodash remove array of object", evensObj);
//9. lodash without
let users9 = [
  { id: 1, name: "ted" },
  { id: 2, name: "mike" },
  { id: 3, name: "bob" },
  { id: 4, name: "sara" }
];
let lodashWithout = [2, 1, 2, 3];
let lodashwithoutTest = _.without(lodashWithout, 1, 2);
const result = _.reject(users9, { id: 1 });
console.log(lodashwithoutTest);
console.log("lodash reject", result);
//[3]
//10. object utilities method

const object = [1, 2, 3, 4];
const valueToRemove = 3;
const arrObj = Object.values(
  Object.fromEntries(
    Object.entries(object).filter(([key, val]) => val !== valueToRemove)
  )
);
console.log("object utilites", arrObj); // [1,2,4]

//11. lodash filter
let users10 = [
  { id: 1, name: "ted" },
  { id: 2, name: "mike" },
  { id: 3, name: "bob" },
  { id: 4, name: "sara" }
];
const lodashFilter = _.filter(users10, { id: 1 });
console.log("lodash filter", lodashFilter);
