// stvaranje objekta uz new Object(); sve se odvaja s ;
const myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
myCar.color = "blue";

console.log(myCar);


//stvarnje objekta literal, sve se odvaja zarezom i umjesto = ide :
const person = {
    firstName: "Dražen",
    lastName: "Orkić",
    id: 1294371,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName());
console.log(person.lastName);

//pretvaranje Json-a u objekt
myJSON = '{"name":"john", "age":30, "car":null}';
myObject = JSON.parse(myJSON);

console.log(myObject);
console.log(myObject.age);

//object literal
var phones = {
    brand: {
        manufacturer: "apple",
    model: "iPhone 13 Pro",    
},
color: ["blue", "green", "black"],
price: 888,
display: "6 inches",
qty: 65,
checkStock: function(){
    if(this.qty > 0){
        return "in stock";
    }
}
};
console.log(phones.brand.model);
console.log(phones.checkStock());
//nakon checkStock trebaju () jer se radi o funkciji

console.log(`the selected phone ${phones.brand.model} is ${phones.checkStock()} and it's price is ${phones.price}.`);
// ovi čudni navodni znaci su altgr+7

myPhonesObj = JSON.stringify(phones);
console.log(myPhonesObj);
//console.log neće pokazati checkStock jer je funkcija, a json ne prikazuje funkcije

{"brand":{"manufacturer":"apple","model":"iPhone 13 Pro"},"color":["blue","green","black"],"price":888,"display":"6 inches","qty":65}
myPhonesObject = JSON.parse(myPhonesObj);
console.log(myPhonesObject);

// još jednom isto primjer, ali na jednom mjestu
var phones = {
    brand: {
        manufacturer: "apple",
    model: "iPhone 13 Pro",    
},
color: ["blue", "green", "black"],
price: 888,
display: "6 inches",
qty: 65,
checkStock: function(){
    if(this.qty > 0){
        return "in stock";
    }
}
};
//object to json -> JSON.stringify
myPhonesObj = JSON.stringify(phones);
console.log(myPhonesObj);

//json to object -> JSON.parse
myPhonesObject = JSON.parse(myPhonesObj);
console.log(myPhonesObject);


// ***************************************************************************

var d = new Date;
console.log(d);

var m = Math.PI;
console.log(m);


// ***************************************
