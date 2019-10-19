const evolveBtn = document.getElementById('evolve');

let currentStage = 'The Dismal Blob';
let clicks = 0;

currentStage = document.getElementById('evolution')
currentStage.innerHTML = "The Dismal Blob"

document.getElementById('music').play()

evolveBtn.addEventListener("click", function evolve() {
    clicks++
   if(clicks > 10 && clicks < 20) {
        currentStage.innerHTML = "Ash Catfolk"
        document.getElementById('evolution').style.fontSize = "60px"
        document.getElementById('picture').style.transform = "rotate(90deg)"
        document.getElementById('picture').style.transition = "all 2s"
    } else if(clicks > 20 && clicks < 30) {
        currentStage.innerHTML = "Fire Drakes"
        document.getElementById('evolution').style.fontSize = "80px"
        document.getElementById('picture').style.transform = "rotate(180deg)"
        document.getElementById('picture').style.transition = "all 2s"
    } else if(clicks > 30 && clicks < 40) {
        currentStage.innerHTML = "Bearded Basilisks"
        document.getElementById('evolution').style.fontSize = "100px"
        document.getElementById('picture').style.transform = "rotate(270deg)"
        document.getElementById('picture').style.transition = "all 2s"
    } else if(clicks > 40 && clicks < 50) {
        currentStage.innerHTML = "Royal Gnolls"
        document.getElementById('evolution').style.fontSize = "120px"
        document.getElementById('picture').style.transform = "rotate(360deg)"
        document.getElementById('picture').style.transition = "all 2s"
    } else if(clicks === 50) {
        document.getElementById('stage').innerHTML = ""
        currentStage.innerHTML = "Your creature has attained Saṃsāra!"
        document.getElementById('evolution').style.fontSize = "120px"
        document.getElementById('picture').style.transform = "rotate(720deg)"
        document.getElementById('picture').style.transition = "all 3s"
    }
})


const name = document.getElementById('name')
name.innerHTML = 'Rafiki'

const picture = document.getElementById('picture')
picture.setAttribute("src", "/Rafiki.png")
picture.style.marginLeft = "200px"
picture.style.marginTop = "-100px"



