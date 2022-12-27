let letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters.size);

let letters1 = new Set(["a","b","c"]);
let text = "";
for (const x of letters1.values()) {
  text += x }
console.log(text);