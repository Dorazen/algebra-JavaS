// 1. iako bih ja rađe to napravio ovako:   names.forEach(name => console.log(name));   tako mi ne izbaci undefined elemente
var names = ['John', 'Jane', 'Bob', , 'Mike'];
var length = names.length;
for (i = 0; i < length; i++) {
    console.log(names[i + 0]);
}

// 2.
var names = ['John', 'Jane', 'Bob', , 'Mike'];
names.push('Dražen');
console.log(names);

// 3. htio sam napraviti da se break dogodi nakon što loop pronađe string Jane, 
// ali navodno array prepoznaje samo integers pa sam ručno upisao position gdje se nalazi Jane
var names = ['John', 'Jane', 'Bob', , 'Mike', 'Dražen'];
var length = names.length;
for (i = 0; i < length; i++) {
    if (i === 2) {break};
    console.log(names[i + 0]);
}

//4. ne znam postaviti funkciju, da stvar bude gora indexOf(3) nije taj undefined zarez, nego ga ni ne prepoznaje u arrayu.
// najednostavniji "dirty fix" je ručno obrisati taj zarez na kojeg sam potrošio 3 sata googlanja! 
var names = ['John', 'Jane', 'Bob', , 'Mike', 'Dražen'];
var length = names.length;
var newNames = names.map(bris);
for (i = 0; i < length; i++) {
        console.log(names[i + 0]);
}
function bris() {
    if (indexOf(3)=="undefined"); {
        names.delete([3]);
    }
}


