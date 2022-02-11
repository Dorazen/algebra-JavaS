var auto = {
    brand: {
        manufacturer: "Opel",
        model: "Astra Classic",
    },
    year: 2007,
    color: "blue",
    doors: 5,
    properties: {
    ABS: "ABS: yes, ",
    servo: "Servo: yes, ",
    airBags: "Air bags: yes, ",
    TV: "TV: not available.",
    },
   checkProperties: function () {
        return this.properties.ABS + this.properties.servo + this.properties.airBags + this.properties.TV;
    },
        qantity: 465,
    checkStock: function(){
        if(this.qantity > 0){
            return "in stock";
        }
    },
    price: "85 000 kunas",
    };

    autoObj = JSON.stringify(auto);
    console.log(autoObj);
    console.log(**********);
    console.log(auto.checkProperties());
    console.log(auto.checkStock());
    console.log(`the selected car ${auto.brand.model} is ${auto.checkStock()} and it's price is ${auto.price}.`);

// ovaj loop izvlači sve keys i njihove values
    for (key in auto) {
        const value = auto[key];
        
        if (auto.propertyIsEnumerable(key)) {
            console.log(key + ': ' + value);
        }
    }