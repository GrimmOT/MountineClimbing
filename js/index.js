let blockDelta = 300
let blocks = document.querySelectorAll(".block")

function scrollevente(event){
    console.log("Крутим колесико")

    for(let i = 0; i < blocks.length; i++){
        let currentPosY = blocks[i].getBoundingClientRect().y
        if(Math.abs(currentPosY) < blockDelta){
            console.log("Анимация")
            blocks[i].classList.add("block-active")
        }
    }
}

window.addEventListener("scroll", scrollevente)