/* Alert pop-up when ever the user loads or reloads the page.*/
alert(" ⓘ How To Play  ★ Match 3 bell Icons to get a win, Once the game is complete press the Reset button to start again. If you guess an incorrect icon you loss.");

document.addEventListener("DOMContentLoaded", function () {

    let divs = document.getElementsByClassName("div-children");
    for (div of divs) {

        div.addEventListener("click", function () {
            getRandomImage(this)

        })
    }
    let resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", resetButton);
}
);


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

    alert('getRandomImage function has been activated');

    random_index = Math.floor(Math.random() * image_Array.length);

    selectedImage = image_Array[random_index]

    //let imagesArray = document.getElementsByClassName('image-div').src = `../assets/css/images/${selectedImage}`
    let imagesArray = imageDiv.getElementsByClassName('image-div')[0];
    imagesArray.style.backgroundImage = `url('${selectedImage}')`;

    // for(let i = 0; i < imagesArray.length; i++){

    //     if (imagesArray.background = `url('+${selectedImage}+')`) {

    //     } else {
    //         this.style.backgroundColor = "cornsilk";
    //     }


    // }
}


function resetButton() {
    alert('resetButton function has been activated');
    getRandomImage();

}
