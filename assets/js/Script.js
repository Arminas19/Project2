/* Alert pop-up when ever the user loads or reloads the page.*/
alert(" ⓘ How To Play  ★ Match 3 bell Icons to get a win, Once the game is complete press the Reset button to start again. If you guess an incorrect icon you loss.");
/*  Once the browser is fully loaded this functtion is called: The purpose of this function is to capture where the user clicked,
their are currently 2 options. 
*/
document.addEventListener("DOMContentLoaded", function () {

    let divs = document.getElementsByClassName("div-children");
    for (div of divs) {

        div.addEventListener("click", function (event) {
            
            getRandomImage(this)
            calculateAnswer(event.target)
        })
    }
    let resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", resetButton);
}
);

/* This Array lays out all the images that will be needed for the getRandomImage(imageDiv) function.
This function is used to get and set a random image out of the image arrry and display the image in a <img> tag.
*/
let image_Array = [
    'assets/images/bell (1).png',
    'assets/images/bell (1).png',
    'assets/images/bell (1).png',
    'assets/images/cherry (1).png',
    'assets/images/cherry (1).png',
    'assets/images/lemon (1).png',
    'assets/images/lemon (1).png',
    'assets/images/orange (1).png',
    'assets/images/watermelon (1).png'
]

function getRandomImage(imageDiv) {

    // alert('getRandomImage function has been activated');

    random_index = Math.floor(Math.random() * image_Array.length);

    selectedImage = image_Array[random_index]

    //let imagesArray = document.getElementsByClassName('image-div').src = `../assets/css/images/${selectedImage}`
    let imagesArray = imageDiv.getElementsByClassName('image-div')[0];
    imagesArray.style.backgroundImage = `url('${selectedImage}')`;
    // calculateAnswer();
    // for(let i = 0; i < imagesArray.length; i++){

    //     if (imagesArray.background = `url('+${selectedImage}+')`) {
    //     } else {
    //         this.style.backgroundColor = "cornsilk";
    //     }
    // }
}



/* 
This function gets the <img> src value from the DOM and checks if that value is the bell icon's url,
Once the a bell icon's url is found, the let bell = 0 icon increase and once it get's to 3 it calles the player has won function.
if bell = 3 never arrives the player has lost function is called.
*/
//let bell = 0;

function calculateAnswer(element) {
    console.log('You have made it to calculateAnswer');
    let bell = 0;
    let failedAttempt = 0;
    //let img = document.getElementsByTagName('img')[this].src;

    console.log(element)
    console.log(window.getComputedStyle(element, null).backgroundImage)
    
    let imgsrc = document.getElementsByTagName("img").src;

    switch (imgsrc) {
        case element.src == `url('assets/images/bell (1).png')`:
            ++bell;
            alert(`You Found ${bell} bell icons`);
            break;
        case element.src !== `url('assets/images/bell (1).png')`:
            ++failedAttempt
            alert(`You have ${failedAttempt}/3 trys left`);
            break;
        default:
            console.log('Unkown Error')
            break;
    }


    /* if(img === `url('assets/images/bell (1).png')`){
         ++bell;
         
         console.log(bell);
         return bell;
     }else{
         conosle.log('This image wasnt the bell icon.')
     }
 
     if( bell === 3){
   console.log('The player won')
     }
     else{
         console.log('The player lost')
     }
     */

}

function checkAnswers() {

}

function Scores() {

}


function resetButton() {
    alert('resetButton function has been activated');


}
