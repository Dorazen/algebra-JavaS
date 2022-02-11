function Person() {
this.name = "John",
this.age = 23
}

const person1 = new Person();
console.log(Person1);
console.log(Person.prototype);

Person.prototype.gender = "male";

console.log(person1.gender);

Person.prototype.eyecolor ="brown";

Person.prototype.greet = function(){
    console.log("Hello " + this.name);
};

console.log(person1.greet);

//ako dodamo novu osobu ona će imati sva dodana svojstva koja smo dodali objektu Person
const person2 = new Person();
console.log(person2);