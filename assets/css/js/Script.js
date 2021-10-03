/* Alert pop-up when ever the user loads or reloads the page.*/
alert(" ⓘ How To Play  ★ Match 3 bell Icons to get a win, Once the game is complete press the Reset button to start again. If you guess an incorrect icon you loss.");

document.addEventListener("DOMContentLoaded", function(){
    let divs = document.getElementsByClassName("div-children");
    
    for(div of divs){
        
        div.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "reset"){
                resetButton();
            }
            else{
                this.getAttribute("data-type")
               
                runGame();
            }

        })
    }
    document.getElementById("reset-button").onclick = () => {
        resetButton();
        }
    
});

function runGame(){
    setImages();
}

function setImages(){
    let divs = document.getElementsByClassName('div-children');

    if (this.style.backgroundColor === "green") {
        // this.style.backgroundColor = "green";
     } else {
         this.style.backgroundColor = "green";
     }
     
 
 
 let divs = document.getElementsByClassName('div-children');
 
 for (let i = 0; i < divs.length; i++) {
     divs[i].addEventListener('click', div);
 }
}

function resetButton(){
alert('You clicked the reset button');
}