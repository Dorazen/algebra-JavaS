// ovdje se nalazi naš pomoćni kod
function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}

function getPI(){
    return Math.PI;
}
// export {getRandomNumber};   ovo radi samo s ES6

module.exports = {
    getRandomNumber: getRandomNumber,  //ovako se exporta u commonJS, naziv funkcije iz mainjs : naziv stvarne funkcije 
    getPI: getPI,
};