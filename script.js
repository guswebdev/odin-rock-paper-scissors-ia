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

console.log(getComputerChoice());