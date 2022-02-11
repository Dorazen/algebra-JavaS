// commonJS primjeri
//ovdje se nalazi naš glavni js kod

// import { getRandomNumber } from "./helper"; //radi samo unutar ES6

//prvo napraviti novu varijablu
var helpers = require("./helpers");  //ovako se importa u commonJS
console.log(helpers.getRandomNumber(100));
console.log(helpers.getPI());