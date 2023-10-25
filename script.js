var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"]

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   
    playSound(randomChosenColour)
}

//btn clicks------------------------------------------------------->
$(".btn").on("click", function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
});
$(".btn").on("click", activateAnimation);
$(".btn").on("click", function (){
    playSound($(this).attr("id"));
});
//----------------------------------------------------------------->





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