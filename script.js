var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"]

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];

    //gamePattern.push(randomChosenColour);

    //$("#"+randomChosenColour)
}

function animateActivation(){
    $(this).addClass("pressed");

    // setTimeout(function(){
    //     $(this).removeClass("pressed");
    // }, 1000)
}

$(".btn").click(function(){
    $(this).addClass("pressed");
    
    setTimeout(() => {
        $(this).removeClass("pressed");
    }, 10);
})