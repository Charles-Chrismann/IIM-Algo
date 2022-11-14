const Caracteristique = require("./Caracteristique");

module.exports=
class Crewmate {
    possibleNames = ["Charles", "Tom", "Julo", "Odilon", "Loic", "Erwann", "Matthieu", "Anthea", "Alex", "Mika", "Santino", "Emilie", "Jacky", "Jade", "Yanis", "Oscar", "Floriane"];
    name;
    role;
    constructor(){
        this.name = this.possibleNames[Math.floor(Math.random() * this.possibleNames.length)]
        this.role = new Caracteristique()
    }

    damages() {
        let rate = Math.random()
        if(rate <= this.role.deathRate) return "DIE";
        else if(rate <= this.role.dieAndHitRate) return "DIEANDHIT";
        else return "HITANDRUN";
    }
}