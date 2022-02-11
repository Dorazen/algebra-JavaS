console.log(parseInt("10")); //navodni znaci znači da se radi o stringu
console.log(parseInt("10.00"));
console.log(parseInt("10.67"));
console.log(parseFloat("10.67"));
console.log(parseInt("42 godine"));
console.log(parseInt("He is 42"));
console.log(parseInt("42 20 50 70"));
//parseInt string pretvara u integer, ali bez decimala. pokaže čisti cijeli broj. 
//ako se radi o više stvari upisanih unutra, prikazat će samo prvu vrijednost. ako je prva stvar riječ, onda će prikazati NaN jer riječ nije broj
//parseFloat dopušta integere s decimalama


//aninimna samopozivajuća funkcija-> da ne zagađujemo global namespace s funkcijama koje ćemo koristiti jednom
(function(){
    console.log(Math.PI);
})(); //Ako nema ove zagradice () prije ; onda je to samo anonimna funkcija.




//ovo je closure - unutarnja funkcija ima pristup funkciji ispred nje te ima pristup globalnim varijablama
function a() {
    var x = "ovo je closure";
    function b() {
        console.log(x);
    }
    b();
}
a();