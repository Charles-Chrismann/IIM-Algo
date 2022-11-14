module.exports=
class Caracteristique {
    possibleRoles = [
        {
            name: "nerd",
            deathRate: 0.5,
            dieAndHitRate: 0.6,
            dogeAndHitRate: 1 // purement indicatif
        },
        {
            name: "sportif",
            deathRate: 0.2,
            dieAndHitRate: 0.4,
            dogeAndHitRate: 1 // purement indicatif
        },
        {
            name: "blonde",
            deathRate: 0.8,
            dieAndHitRate: 0.95,
            dogeAndHitRate: 1 // purement indicatif
        },
        {
            name: "Hero",
            deathRate: 0.1,
            dieAndHitRate: 0.3,
            dogeAndHitRate: 1 // purement indicatif
        },
        {
            name: "AllForOne",
            deathRate: 0.1,
            dieAndHitRate: 0.4,
            dogeAndHitRate: 1 // purement indicatif
        },
    ]
    name;
    deathRate;
    dieAndHitRate;
    dogeAndHitRate;
    constructor(){
        let role = this.possibleRoles[Math.floor(Math.random() * this.possibleRoles.length)]
        this.name = role.name;
        this.deathRate = role.deathRate;
        this.dieAndHitRate = role.dieAndHitRate;
        this.dogeAndHitRate = role.dogeAndHitRate;
    }
}