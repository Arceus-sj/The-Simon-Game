const buttonColours = new Array("red", "blue", "green", "yellow");

const gamePattern = [];


function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);

    let randomChosenColourBtn = document.querySelector(`#${randomChosenColour}`);

   // adding flash animation into random btn
    randomChosenColourBtn.classList.add("flash-animation");

    let randomColourAudio = new Audio(`./sounds/${randomChosenColour}.mp3`);
    
    console.log(randomColourAudio);

    randomColourAudio.play();

}

nextSequence();