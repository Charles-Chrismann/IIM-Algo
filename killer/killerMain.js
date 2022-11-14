"use strict"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const Crewmate = require("./Crewmate")
const Killer = require("./Killer")

// y a ke 5 survivants, flemme de faire une loop
let survivors = [
    new Crewmate(),
    new Crewmate(),
    new Crewmate(),
    new Crewmate(),
    new Crewmate()
]
let deads = []
let atked

let killer = new Killer("Jason", 100)

console.log("")
console.log("--------------------Note du dev: plusieurs crewmates peuvent avoir le même nom----------------------------")
console.log("")

while(killer.hp > 0 && survivors.length > 0) {
    atked = survivors[getRandomInt(survivors.length)]
    switch(atked.damages()) {
        case 'DIE':
            deads.push(survivors.splice(survivors.indexOf(atked), 1)[0])
            console.log(`${killer.name} a tué ${atked.name}`)
            break;
        case 'DIEANDHIT':
            deads.push(survivors.splice(survivors.indexOf(atked), 1)[0])
            killer.hp -=15;
            console.log(`${atked.name} est mort mais a infligé 15 point de dégats`)
            break;
        case 'HITANDRUN':
            killer.hp -=10;
            console.log(`${atked.name} a esquivé et a infligé 10 point de dégats`)
    }
}

if(killer.hp <=0 && survivors.length ===0) console.log("Le dernier survivant a tué le tueur avant de mourrir")
else if(killer.hp <=0) {
    // victoire des survivants
    if(survivors.length === 5) console.log("Les survivants ont gagné, personne n'est mort")
    else {
        let deadsString = ""
        deads.forEach(dead => {
            deadsString += ` ${dead.name},`
        });
        console.log(`Les survivants ont gagné,${deadsString} sont morts, rip a eux`)
    }
} else console.log(`Tous les survivants sont mort, ${killer.name} s'échappe.`)