const displayContent = document.getElementById('displaycontent');
const scoreboard = document.getElementById('score');
const batBtn = document.getElementById('bat');
const restartBtn = document.getElementById('restart');
let ballsLeft = 6;
let totalScore = 0;

const playerChoices = ["1", "2", "4", "6", "0"];
const compChoices = ["bowled", "catch", "bowl", "bowl", "bowl", "bowl"];

batBtn.addEventListener('click', playGame);
restartBtn.addEventListener('click', restartGame);

function playGame() {
    const playerChoice = playerChoices[Math.floor(Math.random() * playerChoices.length)];
    const compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];

    switch (playerChoice) {
        case "0":
            switch (compChoice) {
                case "bowled":
                    displayContent.textContent = "You got Bowled";
                    setTimeout(endGame, 1000);
                    
                    break;
                case "catch":
                    displayContent.textContent = "You got caught";
                    setTimeout(endGame, 1000);
                    
                    break;
                case "bowl":
                    displayContent.textContent = "Dot Ball";
                    ballsLeft--;
                    break;
            }
            break;
        default:
            switch (compChoice) {
                case "bowled":
                case "catch":
                    displayContent.textContent = "Wide";
                    
                    break;
                case "bowl":
                    if (["1", "2", "4", "6"].includes(playerChoice)) {
                        displayContent.textContent = "It's a "+ '  '  + playerChoice;
                        totalScore += parseInt(playerChoice);
                        scoreboard.textContent = "Score: " + totalScore;
                    }
                    ballsLeft--;
                    break;
            }
            break;
    }

    if (ballsLeft === 0) {
        setTimeout(endGame, 500);
    }
    document.getElementById('balls').textContent = "Balls Left:  " + ballsLeft;
}

function endGame() {
    displayContent.textContent = "Game Over";
    batBtn.disabled = true;
    restartBtn.style.display = 'inline';
    scoreboard.textContent = "Final Score: " + totalScore;
}

function restartGame() {
    displayContent.textContent = "Game Starts";
    scoreboard.textContent = "Score: 0";
    ballsLeft = 6;
    document.getElementById('balls').textContent = "Balls Left:  " + ballsLeft;
    totalScore = 0;
    batBtn.disabled = false;
    restartBtn.style.display = 'none';
}
