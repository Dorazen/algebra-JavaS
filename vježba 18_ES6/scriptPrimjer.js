//spread ... operator primjeri -> koristi se za spajanje elemenata arraya, ali se njime mogu spajati i objekti
//spread se koristi za stvaranje kopija koda kojim se poboljšava čitljivost našeg koda
const arrayValues = ["my", "name", "is", "drazen"];
console.log(arrayValues); // normalan conslole.log output -> [ 'my', 'name', 'is', 'drazen' ]
console.log(...arrayValues); //ako za output koristimo spread operator ... -> my name is drazen

const array1 = ["ja", "pametan"];
const array2 = [...array1, "baš", "i", "nisam"];
console.log(array2);  //[ 'ja', 'pametan', 'baš', 'i', 'nisam' ]
console.log(...array2); // ja pametan baš i nisam

//rest ... operator -> definira funkcije s nepoznatim brojem argumenata > ono što ulazi u () od funkcije. 
//ova sintaksa dozvoljava funkciji da primi beskonačan broj parametara u obliku array-a
function ispisiImena(...imena) {
    console.log(imena);
}
const x = ["john", "ivo", "luka", "karlo"];
console.log(ispisiImena(x));

//arrow function =>   se ne može koristiti unutar konstruktora i ne može koristiti this. i super

//klase
class Student {
    constructor(firstName, lastName, years){
        this.firstName = firstName;
        this.lastName = lastName;
        this.years = years;
    }
    //naša custom metoda
    basicInfo(){
        return `Student ${this.firstName} ${this.lastName} is ${this.years} years old.`;
    }
}

let student1 = new Student("Dražen", "Orkić", 29); //kreira instancu naše klase koja se zove student
console.log(student1.firstName);
console.log(student1.basicInfo());

class Report extends Student{
    constructor(firstName, lastName, years, grade){
        super(firstName, lastName, years);
        this.grade = grade;
    }
    yearLevel(){  //naša custom metoda koja vraća podatke studenta koja je godina faksa
        return `Student ${this.firstName} ${this.lastName} is a ${this.grade} and is ${this.years} years old.`;
    }
}

let student2 = new Report("Pero", "Perić", 26, "Senior"); //kreira instancu naše klase koja se zove Report
console.log(student2.yearLevel());
console.log(typeof(student2));

//promises prikazuje rezultat radnje kao pozitivan ili negativan te što napraviti ako je negativan (donekle slično kao if else, ali kompliciranije)

//api application programming interface: 