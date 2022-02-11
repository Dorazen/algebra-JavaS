// arrays primjeri
const phones = ["Samsung galaxy 21", "iphone 13 Pro", "Sony Xperia Z"];

console.log(phones[1]);

phones.push("iPhone 12 Pro Max", "Samsung", "blackberry");
console.log(phones);

//ispisat će rečenicu + element na poziciji [5] koji je zapravo 6. po redu jer kreće od 0, 1, 2....
console.log("The phone you have selected is " + phones[5]);

//listat će sve elemente, naziv element može biti bilo koji naziv; ne mora pisati elemenet
phones.forEach(element => 
console.log(element)
);

// dodat će pop up alert na stranici
phones.forEach(element => 
    alert(element)
    );

 // ************************************************
//vježba
 // 1. + 2.
var names = ["Ivana", "Sanjin", "Marijan", "Doroti", "Damir", "Lorena", "Ružica"];
console.log(names);

// 3.
var weird = [["dijete", "odrasla osoba"], ["računalo", "pisaća mašina"], ["mokro", "suho"]];
console.table(weird);

// 4.
var weird = [["dijete", "odrasla osoba"], ["računalo", "pisaća mašina"], ["mokro", "suho"]];
weird.push(["gladan", "sit"]);
console.table(weird);