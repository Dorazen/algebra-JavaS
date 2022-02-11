//konstruktorske funkcije pišemo velikim slovom
function Dog(name){
    this.name = name || "Rex";     //ako user ne upiše ime onda će biti Rex po defaultu || znači or
    this.bark = function() {        //ako radimo funkciju kao varijablu onda funkciji ne dajemo naziv
    return "Wuf wuf";
    };
}

const dog1 = new Dog("Fido");
Dog.prototype.getName = function(){
    return this.name;
};
console.log(dog1.getName());

Dog.prototype.getName = function(){
    return "Hello, your dog's name is " + this.name;
};

