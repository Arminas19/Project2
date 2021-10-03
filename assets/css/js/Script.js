/* Alert pop-up when ever the user loads or reloads the page.*/
alert(" ⓘ How To Play  ★ Match 3 bell Icons to get a win, Once the game is complete press the Reset button to start again. If you guess an incorrect icon you loss.");

document.addEventListener("DOMContentLoaded", function(){
    
let divs = document.getElementsByClassName('div-children');
if(divs.onclick === "div-children"){
runGame();
}
else{
    let resetButton = document.getElementById('reset-button');
    resetButton.onclick = function(){
        resetButton();
    }
}

});

function runGame(){


}

function resetButton(){
   
}
