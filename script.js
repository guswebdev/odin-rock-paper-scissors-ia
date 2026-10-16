let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {

    const numeroAleatorio = Math.floor((Math.random() * (2 - 0 + 1) + 0));
    let mano;

    if (numeroAleatorio === 0) {
        mano = "rock"
    } else if (numeroAleatorio === 1) {
        mano = "paper"
    } else if (numeroAleatorio === 2) {
        mano = "scissors"
    }

    return mano;

}

const getHumanChoice = () => {
    let mano = prompt("Ingrese su jugada: (rock, paper, scissors)")

    return mano.toLowerCase();
}

const playRound = (humanChoice, computerChoice) => {
    console.log(`HUMAN: ${humanChoice}`);
    console.log(`COMPUTER: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! ${humanChoice} equals ${computerChoice}`)
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You won! ${humanChoice} ties with ${computerChoice}`)
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") {
        console.log(`You lost! ${computerChoice} ties with ${humanChoice}`)
        computerScore++;
    }

    console.log(humanScore)
    console.log(computerScore)
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


//playGame();