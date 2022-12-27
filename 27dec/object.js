function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "English";
}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
console.log("My father is " + myFather.nationality + ". My mother is " + myMother.nationality);

function Person1(firstName,lastName,age,eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.changeName = function (name) {
    this.lastName = name;
  }
}
const myMother1 = new Person1("Sally","Rally",48,"green");
myMother1.changeName("Doe");
console.log("My mother's last name is " + myMother1.lastName);
