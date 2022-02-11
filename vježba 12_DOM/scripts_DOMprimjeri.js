// DOM manipulacija windowa. nekoliko generic primjera
console.log(window.innerWidth);
console.log(window.location.hostname);
alert("hello! nalazite se na" + window.location.hostname);
window.alert("hello! i'm an alert box!"); 
console.log("return from prompt: " + window.prompt("Please enter your name"));

//getElement (nedostaje mi html file)
document.getElementById("button-1").onclick = click;
document.querySelector(".needText").innerHTML = "Ovdje sam dodao neki text uz pomoć Js-a";
document.getElementsByClassName("needText").[0].innerHTML = "Ovdje sam dodao element preko array-a";
function click() {
alert("You've clicked the button. Now what?");
}
