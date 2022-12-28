const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.get("apples"));

let fruit  = new Map();
fruit.set("apples", 500);
fruit.set("bananas", 300);
fruit.set("oranges", 200);
console.log(fruit.get("apples"));

const f1 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(f1.get("apples"));

const f2 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(f2.has("apples"));

const f3 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
f3.delete("apples");

console.log(f3.has("apples"));