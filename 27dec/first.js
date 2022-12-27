let person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person);


const person1 = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"
};
console.log( person1["firstname"] + " is " + person["age"] + " years old.");