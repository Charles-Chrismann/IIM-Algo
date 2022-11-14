"use strict"

let validBtn = document.querySelector("#submitForm")
let batonInput = document.querySelector("#numBattons")
let main = document.querySelector("main")
let numberSelected = document.querySelector(".numberSelected")
let nextTurn = document.querySelector("#nextTurn")
let winner = document.querySelector("#winner")
let player = document.querySelector(".player")
let currentPlayer = "p1"

validBtn.addEventListener("click", () => {
    player.textContent = "p1"
    while(main.firstChild){
        main.firstChild.remove()
    }
    for(let i = 0; i < batonInput.value; i++) {
        let div = document.createElement("div")
        div.classList.add("baton")
        main.appendChild(div)
        div.addEventListener("click", function(){
            if(document.querySelectorAll(".selected").length >= 3 && !this.classList.contains("selected")) return
            this.classList.toggle("selected")
            numberSelected.textContent = document.querySelectorAll(".selected").length
        })
    }
})

nextTurn.addEventListener("click", () => {
    if(document.querySelectorAll(".selected").length === 0) return
    if(currentPlayer === "p1") currentPlayer = "p2"
    else currentPlayer = "p1"
    player.textContent = currentPlayer
    document.querySelectorAll(".selected").forEach(selected => {
        selected.remove()
    })
    numberSelected.textContent = 0

    console.log(document.querySelectorAll(".baton").length)
    if(document.querySelectorAll(".baton").length === 0) {
        console.log("victoire")
        winner.textContent = currentPlayer;
        document.querySelector(".modal").style.display = "block"
    }
})