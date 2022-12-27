let cars = [ ];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
console.log(cars);


let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

let fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit[0]);

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log( fruits1[fruits1.length - 1]);


const fruits3 = ["Banana", "Orange", "Apple"];
fruits3[6] = "Lemon";
 let fLen = fruits3.length;
let text = "";
 for (i = 0; i < fLen; i++) {
   text += fruits3[i] + "<br>";
 }
console.log(fruits3);