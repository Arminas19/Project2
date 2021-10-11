alert(" ⓘ How To Play  ★ Match 3 bell Icons to get a win, Once the game is complete press the Reset button to start again. If you guess an incorrect icon you loss.");
/*  Once the browser is fully loaded this functtion is called: The purpose of this function is to capture where the user clicked,
their are currently 2 options. One for the reset button and the other one is for the getRandomImage function. 
*/
document.addEventListener("DOMContentLoaded", function() {

    let divs = document.getElementsByClassName("Game-container");
    for (div of divs) {

        div.addEventListener("click", function(event) {

            getRandomImage(this);
            calculateAnswer(event.target);
        });
    }
    let resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", resetButton);
});

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
];
/* This functions puropse is to set a random image inside the <img> tag */
function getRandomImage(imageDiv) {

    // alert('getRandomImage function has been activated');

    random_index = Math.floor(Math.random() * image_Array.length);

    selectedImage = image_Array[random_index];

    //let imagesArray = document.getElementsByClassName('image-div').src = `../assets/css/images/${selectedImage}`
    let imagesArray = imageDiv.getElementsByClassName('image-container')[0];
    imagesArray.style.backgroundImage = `url('${selectedImage}')`;

    image_Array.splice(random_index, 1);
    console.log(image_Array);
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
Once the bell icon's url is found, the let bell = 0 icon increase and once it get's to 3 it calles the player has won function.
if failedAttempt = 3 than the playerHasLost function is called.
*/
//let bell = 0;
let bell = 0;
let failedAttempt = 4;

function calculateAnswer(element) {
    console.log('You have made it to calculateAnswer');


    //let img = document.getElementsByTagName('img')[this].src;

    console.log(element);
    console.log(window.getComputedStyle(element, null).backgroundImage);

    console.log('This is the element ' + element.style.backgroundImage);
    // let imgsrc = document.getElementsByTagName("img").src;

    let switchUrl = 'url("assets/images/bell (1).png")';

    switch (element.style.backgroundImage) {
        case switchUrl:
            bell += 1;
            alert(`You Found ${bell} bell icons`);

            break;
        case !switchUrl:
            // failedAttempt += 1;
            // alert(`You have ${failedAttempt}/3 trys left`);
            break;
        default:
            failedAttempt -= 1;
            alert(`You have ${failedAttempt} lives left`);

            break;
    }


    if (bell === 3) {
        playerHasWon();
    }
    if (failedAttempt === 0) {
        playerHasLost();
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





/* This function is called when the player has guessed 3 bell icons, The purpose of the arrow functions is to stop the game
from being played by setting the images.style.backgroundImage to undifined and leaving the calculateAnswer function empty. */
function playerHasWon() {
    alert('You Won!!');

    let win = parseInt(document.getElementById('win').innerText);
    document.getElementById('win').innerText = ++win;

    getRandomImage = (imageDiv) => {
        let imagesArray = imageDiv.getElementsByClassName('image-div')[0];
        imagesArray.style.backgroundImage = undefined;
    };

    calculateAnswer = () => {

    };

}

/* This function is the same like the playerHasWon function but inseade of incresing the won span tag 
this is incressing the loss span tag. */
function playerHasLost() {
    alert(' You Lost :( ');

    let loss = parseInt(document.getElementById('loss').innerText);
    document.getElementById('loss').innerText = ++loss;

    getRandomImage = (imageDiv) => {
        let imagesArray = imageDiv.getElementsByClassName('image-container')[0];
        imagesArray.style.backgroundImage = undefined;
    };
    calculateAnswer = () => {

    };
}


/* I use the resetButton and the resetGame functions too reset the images and to start the game over but in the same time
leave the scores just like they where before. */
function resetButton() {
    alert('resetButton function has been activated');
    resetGame();

}

function resetGame() {

    image_Array = [
        'assets/images/bell (1).png',
        'assets/images/bell (1).png',
        'assets/images/bell (1).png',
        'assets/images/cherry (1).png',
        'assets/images/cherry (1).png',
        'assets/images/lemon (1).png',
        'assets/images/lemon (1).png',
        'assets/images/orange (1).png',
        'assets/images/watermelon (1).png'
    ];

    getRandomImage = (imageDiv) => {




        random_index = Math.floor(Math.random() * image_Array.length);

        selectedImage = image_Array[random_index];


        imagesArray = imageDiv.getElementsByClassName('image-container')[0];
        imagesArray.style.backgroundImage = `url('${selectedImage}')`;

        image_Array.splice(random_index, 1);
        console.log(image_Array);
    };

    bell = 0;
    failedAttempt = 4;

    calculateAnswer = (element) => {
        console.log(element);
        console.log(window.getComputedStyle(element, null).backgroundImage);




        let switchUrl = 'url("assets/images/bell (1).png")';

        switch (element.style.backgroundImage) {
            case switchUrl:
                bell += 1;
                alert(`You Found ${bell} bell icons`);

                break;
            case !switchUrl:

                break;
            default:
                failedAttempt -= 1;
                alert(`You have ${failedAttempt} Lives left`);
                console.log('Unkown Error');
                break;
        }


        if (bell === 3) {
            playerHasWon();
        }
        if (failedAttempt === 0) {
            playerHasLost();
        }
    };
}