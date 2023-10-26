var level=0;
var started = false;
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"]
var userClickedPattern = [];


$(".btn").on("click", function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound($(this).attr("id"));

    checkAnswer(userClickedPattern.length-1)
    
});
$(".btn").click(activateAnimation);




$(document).on("keypress", function(){
    if(!started){
        nextSequence();
        level++;
        $("#level-title").text("Level "+level);
        started = true;
    }
})

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      console.log("wrong");
    }

}
    




function nextSequence(){

    userClickedPattern = []
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   
    playSound(randomChosenColour)
}


function playSound(name){
    var sound = new Audio("sounds/"+name+".mp3");
    sound.play();
}

function activateAnimation(){
    $(this).addClass("pressed");

    setTimeout(() => {
        $(this).removeClass("pressed");
    }, 5);
}










