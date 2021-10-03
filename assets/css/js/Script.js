/* Alert pop-up when ever the user loads or reloads the page.*/
alert(" ⓘ How To Play  ★ Match 3 bell Icons to get a win, Once the game is complete press the Reset button to start again. If you guess an incorrect icon you loss.");

document.addEventListener("DOMContentLoaded", function(){
    let divs = document.getElementsByTagName("div");
    for(div of divs){

        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "reset"){
                    resetGame();
            }
            else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }

        })
    }
});

function runGame(){
document.getElementsByClassName('div-children');

}


function resetGame(){

}