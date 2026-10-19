let humanScore = 0;
let computerScore = 0;
let roundContador = 0;

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
    
    roundContador++;

    let result = ""

    $roundContador.textContent = roundContador;
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

const playGame = () => {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore === computerScore) {
        console.log("Draw")
    } else if (humanScore > computerScore) {
        console.log("You won.")
    } else {
        console.log("You lost.")
    }
}

const d = document;

const $btnRock = d.querySelector("#btn-rock");
const $btnPaper = d.querySelector("#btn-paper");
const $btnScissors = d.querySelector("#btn-scissors");
const $roundContador = d.querySelector(".round-contador");
const $roundResult = d.querySelector(".round-result");
const $humanScore = d.querySelector(".human-score");
const $computerScore = d.querySelector(".computer-score");
const $humanChoice = d.querySelector(".human-choice");
const $computerChoice = d.querySelector(".computer-choice");
const $matchResult = d.querySelector(".match-result");

const handleClick = (e) => {
    playRound(e.target.value, getComputerChoice())
}

d.addEventListener("click", handleClick)


//playGame();