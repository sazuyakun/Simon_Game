var level=0;
var started = false;
var userClickedPattern = ["1"];
var gamePattern = ["1"];
var buttonColours = ["red", "blue", "green", "yellow"]


for(var i = 0; i<gamePattern.length+1; i++){
    if(userClickedPattern[i] === gamePattern[i]){
//btn clicks------------------------------------------------------->
        $(".btn").on("click", function(){
            var userChosenColor = $(this).attr("id");
            userClickedPattern.push(userChosenColor);

            playSound($(this).attr("id"));
            started = false;

        });
        $(".btn").click(activateAnimation);

//----------------------------------------------------------------->
    }
    else{
        break;
    }
}


$(document).on("keypress", function(){
    if(!started){
        nextSequence();
        level++;
        $("#level-title").text("Level "+level);
        started = true;
    }
})

  




function nextSequence(){
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










