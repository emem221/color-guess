var heading;
heading = document.getElementById('colourValue');

var buttons = document.getElementsByClassName('colourButton');

function setButtonColour(button, red, green, blue) {
    button.setAttribute('style',
        'background-color: rgb(' + red + ',' + green + ',' + blue + ');'
    );
}


setButtonColour(buttons[0], 0, 0, 255);

setButtonColour(buttons[1], 255, 0, 255);

setButtonColour(buttons[2], 0, 255, 0);

setButtonColour(buttons[3], 113, 41, 247);

setButtonColour(buttons[4], 247, 223, 16);

function makeColourValue() {
    return Math.round(Math.random() * 255); //generates random number
}


var answerMessage = document.getElementById('answer');



function startGame() {

    answerMessage.innerHTML = "";

    var answerButton = Math.round(Math.random() * (buttons.length - 1));


    for (var i = 0; i < buttons.length; i++) {

        var red = makeColourValue();
        var green = makeColourValue();
        var blue = makeColourValue();

        setButtonColour(buttons[i], red, green, blue);

        if (i === answerButton) {
            heading.innerHTML = `(${red}, ${green}, ${blue})`;
        }

        buttons[i].addEventListener('click', function() {
            if (this === buttons[answerButton]) {
                answerMessage.innerHTML = "Correct!";
            } else {
                answerMessage.innerHTML = "Wrong answer! Guess again!";
            }
        });

    }

}

startGame();

document.getElementById('resetButton').addEventListener('click', startGame);