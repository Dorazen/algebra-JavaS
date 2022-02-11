// 1.
var firstName = "Dražen";
var lastName = "Orkić";
var fullName = firstName + " " + lastName;
console.log(fullName);

// 2. krivo je jer z nije nigdje definiran. ako z zamijenim s x onda radi
var x; 
if (z === 2) {
    x = y;
} else {
   x = 5;
} 
console.log(x);

// 3.
var i = 1;
while (i <= 20) {
    if (i % 2 == 0) {
        console.log("Broj " + i + " je paran");
}  else { 
    console.log("Broj " + i + " je neparan");
}
i++;}
