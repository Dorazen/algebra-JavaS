// anime({ //samopozivajuća funkcija
//     targets: ".animate-me", //sva se svojstva odvajaju sa zarezom
//     easing: "easeInOutSine",
//     direction: "alternate",
//     duration: 2000,
//     loop: true, //true je isto što i infinite, ali se može i odabrati koliko će biti ponavljanja: 1, 2, 45....itd
//     width: 100,
//     height: 100
// });

anime({ 
    targets: ".animate-me", 
    translateX: 270,
    easing: "easeInOutSine",
    loop: true, 
    direction: "alternate"
});

anime({
targets: ".numbers",
innerHTML: [0, 5000],
easing: "linear",
round: "10", //false će vrtiti sve decimale, 10 samo desetinke, 100 stotinke itd a 1 bez decimala. 0 će ubagat sve
// loop: true
});

anime({ 
    targets: ".loop-alternate-infinity", 
    translateX: 270,
    easing: "easeInOutSine",
    loop: true, 
    direction: "alternate"
});