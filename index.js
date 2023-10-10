let gamePattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];

$(".btn").on("click", function(){
    let userChosenColour = $(this).attr("id");
})

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    lightsAnimation(randomChosenColour);

    let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

}

function lightsAnimation(colour) {
    $("#" + colour).css("box-shadow","0px 0px 15px 2px " + colour);
    setTimeout(() => {
        $("#" + colour).css("box-shadow", "none");
    }, 1000);
}