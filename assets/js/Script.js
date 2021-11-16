/*jshint esversion: 6 */

/* Once the game loads this function is activated and the divs in 'Game-container' 
now have an event Listener that waits for a click. Once a div is clicked the two function 
get called.
*/
document.addEventListener("DOMContentLoaded", function () {

    let divs = document.getElementsByClassName("Game-container");
    for (var div of divs) {

        div.addEventListener("click", function (event) {

            if (getRandomImage(this)) {

                calculateAnswer(event.target);
            }

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
    if (imageDiv.classList.contains("toggled")) {
        return false;
    }


    var random_index = Math.floor(Math.random() * image_Array.length);

    var selectedImage = image_Array[random_index];

    let imagesArray = imageDiv.getElementsByClassName('image-container')[0];
    imagesArray.style.backgroundImage = `url('${selectedImage}')`;
    imageDiv.classList.add("toggled");
    image_Array.splice(random_index, 1);
    return true;

}



/* 
This function gets the <img> src value from the DOM and checks if that value is the bell icon's url,
Once the bell icon's url is found, the let bell = 0 icon increase and once it get's to 3 it calles the player has won function.
if failedAttempt = 3 than the playerHasLost function is called.
*/
let bell = 0;
let failedAttempt = 4;

function calculateAnswer(element) {
    console.log('You have made it to calculateAnswer');




    element;
    window.getComputedStyle(element, null).backgroundImage;

    let switchUrl = 'url("assets/images/bell (1).png")';

    switch (element.style.backgroundImage) {
        case switchUrl:
            bell += 1;
            alert(`You Found ${bell} bell icons`);

            break;
        case !switchUrl:
            break;
        default:
            if (failedAttempt > 2) {
                failedAttempt -= 1;
                alert(`You have ${failedAttempt} lives left`);
            } else if (failedAttempt == 2) {
                failedAttempt -= 1;
                alert('last life left');

            } else {
                alert('You have 0 lives left');
                failedAttempt -= 1;

            }
            break;
    }


    if (bell === 3) {
        playerHasWon();
    }
    if (failedAttempt === 0) {
        playerHasLost();
    }

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
    let imagesArray = document.getElementsByClassName('image-container');

    for (let i = 0; i < imagesArray.length; i++) {

        imagesArray[i].style = null;
    }

    let images = document.getElementsByClassName('Game-container');
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains("toggled")) {
            images[i].classList.remove('toggled');
        }
    }
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

        if (imageDiv.classList.contains("toggled")) {
            return false;
        }


        var random_index = Math.floor(Math.random() * image_Array.length);

        var selectedImage = image_Array[random_index];


        var imagesArray = imageDiv.getElementsByClassName('image-container')[0];
        imagesArray.style.backgroundImage = `url('${selectedImage}')`;
        imageDiv.classList.add("toggled");

        image_Array.splice(random_index, 1);

        return true;

    };

    bell = 0;
    failedAttempt = 4;

    calculateAnswer = (element) => {
        element;
        window.getComputedStyle(element, null).backgroundImage;




        let switchUrl = 'url("assets/images/bell (1).png")';

        switch (element.style.backgroundImage) {
            case switchUrl:
                bell += 1;
                alert(`You Found ${bell} bell icons`);

                break;
            case !switchUrl:

                break;
            default:
                if (failedAttempt > 2) {
                    failedAttempt -= 1;
                    alert(`You have ${failedAttempt} lives left`);
                } else if (failedAttempt == 2) {
                    failedAttempt -= 1;
                    alert('last life left');

                } else {
                    alert('You have 0 lives left');
                    failedAttempt -= 1;

                }
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