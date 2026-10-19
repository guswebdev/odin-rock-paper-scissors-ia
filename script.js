let humanScore = 0;
let computerScore = 0;

const d = document;

const $btnRock = d.querySelector("#btn-rock");
const $btnPaper = d.querySelector("#btn-paper");
const $btnScissors = d.querySelector("#btn-scissors");
const $btnsJuego = d.querySelector(".btns");
const $btnReset = d.querySelector(".btn-reset");
const $roundResult = d.querySelector(".round-result");
const $humanScore = d.querySelector(".human-score");
const $computerScore = d.querySelector(".computer-score");
const $humanChoice = d.querySelector(".human-choice");
const $computerChoice = d.querySelector(".computer-choice");
const $matchResult = d.querySelector(".match-result");

const getComputerChoice = () => {

    let mano;
    const numeroAleatorio = Math.floor((Math.random() * (2 - 0 + 1) + 0));

    switch (numeroAleatorio) {
        case 0:
            mano = "rock";
            break;
        case 1:
            mano = "paper";
            break;
        case 2:
            mano = "scissors";
            break;
    }

    return mano;

}

const playRound = (humanChoice, computerChoice) => {

    let result = ""

    $humanChoice.textContent = humanChoice;
    $computerChoice.textContent = computerChoice;

    if (humanChoice === computerChoice) {
        result = `It's a tie! ${humanChoice} equals ${computerChoice}`;
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        result = `You won! ${humanChoice} ties with ${computerChoice}`;
    } else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        result = `You lost! ${computerChoice} ties with ${humanChoice}`
    }

    $roundResult.textContent = result;
    $humanScore.textContent = humanScore;
    $computerScore.textContent = computerScore;
    return result;
}

const playGame = (humanChoice) => {

    playRound(humanChoice, getComputerChoice())

    if (humanScore === 5 || computerScore === 5) {
        (humanScore > computerScore) ? $matchResult.textContent = "You won." : $matchResult.textContent = "You lost.";

        $btnsJuego.style.display = "none";
        $btnReset.style.display = "inline-block"
    }
}

const playReset = () => {
    
    humanScore = 0;
    computerScore = 0;
    $humanChoice.textContent = "-";
    $computerChoice.textContent = "-";
    $humanScore.textContent = "-";
    $computerScore.textContent = "-";
    $roundResult.textContent = "-"
    $matchResult.textContent = "-"

    $btnsJuego.style.display = "flex";
    $btnReset.style.display = "none"
}

const handleClick = (e) => {

    const botonJuego = e.target.closest('.btn-rock, .btn-paper, .btn-scissors');
    const botonReset = e.target.closest('.btn-reset');

    if (botonJuego) {
        playGame(e.target.value)
    }

    if (botonReset) {
        playReset()
    }
}

d.addEventListener("click", handleClick)