var count = 0;
while (count < 10) {
console.log("Vrijednost brojača je:" + count);
count++;}

// brojač, mora imati ovaj count++ ili count-- inače ne radi


for (var brojac = 1; brojac < 10; brojac++) {
   console.log("Vrijednost brojača je:" + brojac);
}

// continue nastavi loop kad se if dogodi
for (i = 0; i < 10; i++) {
    if (i === 3) {continue;}
    console.log("Brojač: " + i);
}

// break stopira loop kad se dogodi if
for (i = 0; i < 10; i++) {
    if (i === 3) {break;}
    console.log("Brojač: " + i);
}

var varOne = 0;
for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
        varOne++;
    }
}
console.log(varOne);

// vježba, moja netočna verzija koja ne radi
while (i = 3, i < 21, i++) {
    if (i === 9, i === 18) {continue;}
    console.log("Brojač: " + i);
    break;
}
// rješenje vježbe
var i = 2;
while (i < 20) {
	i++;
	if (i % 9 === 0) {
		continue;
	}
	console.log(i);
}