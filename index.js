let gamePattern = [];
let userClickedPattern = [];

const buttonColours = ["red", "blue", "green", "yellow"];

let started = false;
let level = 0;

$(".btn").on("click", function(){
    let userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour, 100);

    checkAnswer(userClickedPattern.length - 1);

})

$(document).on("keydown", function(){
    if(!started) {
        started = true;
        nextSequence();
    }
})

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    }
    else {
        console.log("wrong")
    }
}

function nextSequence() {
    userClickedPattern = [];

    level++;

    $("h1").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    animatePress(randomChosenColour, 1000);

    playSound(randomChosenColour);

}

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(colour, time) {
    $("#" + colour).css("box-shadow","0px 0px 15px 2px " + colour).addClass("pressed");
    setTimeout(() => {
        $("#" + colour).css("box-shadow", "none").removeClass("pressed");
    }, time);
}