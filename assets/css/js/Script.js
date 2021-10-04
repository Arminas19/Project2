/* Alert pop-up when ever the user loads or reloads the page.*/
alert(" ⓘ How To Play  ★ Match 3 bell Icons to get a win, Once the game is complete press the Reset button to start again. If you guess an incorrect icon you loss.");

document.addEventListener("DOMContentLoaded", function(){
    
 let divs = document.getElementsByClassName("div-children");
for(div of divs){

    div.addEventListener("click", function(){
        if(this.getAttribute("data-type") === "submit"){
                resetButton();
        }
        else{
            this.getAttribute("data-type") === "div1-9";
            runGame(getRandomImage);
        }

    })
}
});





function runGame(getRandomImage){
//alert('runGame function has been activated');

let image_Array = [
'bell (1).png',
'cherry (1).png',
'lemon (1).png',
'orange (1).png',
'watermelon (1).png'
]

function getRandomImage(){

random_index = Math.floor(Math.random() * image_Array.length);

selectedImage = image_Array[random_index]

document.getElementsByClassName('image-div').src = `./images/${selectedImage}`

return getRandomImage
}

}

function resetButton(){
    alert('resetButton function has been activated');
    getRandomImage();

}
