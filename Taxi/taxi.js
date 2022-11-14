"use strict"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


let Personnage = require("./Personnage");
let Trajet = require("./Trajet");

let John = new Personnage("John", 10);
let trajet = new Trajet(30);
let songs = ["Anissa - Wejdene", "Die - Gazo", "OVNI - JUL", "Moulaga - Heuss L'enfoiré", "Mario clash Luigi - Norman"];

while(trajet.redFire > 0 && John.mentalHealth >= 0) {
    trajet.radio = songs[getRandomInt(songs.length)];
    if(trajet.radio === "Anissa - Wejdene") {
        John.mentalHealth -= 1;
        trajet.changes +=1;
    }
    trajet.redFire -=1
}

if(trajet.redFire === 0) console.log(`${John.name} est arrivé, il lui a fallu ${trajet.changes} changements de taxi pour y arriver`)
else console.log("explosion")