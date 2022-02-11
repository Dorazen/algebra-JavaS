// ninin primjer
function mojaFunkcija(param1, param2) {
    var množenje = param1 * param2;
    var zbrajanje = param1 + param2;
    return (množenje + "/" + zbrajanje);
}
console.log(mojaFunkcija(5, 3));


// vježba gdje u prompt windowu trebamo napraviti kalkulator fahreheita u celziuse i onda će nam u alert windowu izbaciti rezultat
var input = prompt("Type Fahrenheits to see how much it is in Celsius");
function calculator() {
    return (5 / 9) * (input - 32);
} 
alert(input + " is " + calculator().toFixed(1) + " in fahrenheits");
