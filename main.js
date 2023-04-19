
const choices = ['rock', 'paper', 'scissors'];
const cases = [
    [0, 1], // win
    [1, 0], // lose
    [0, 2], // lose
    [2, 0], // win
    [1, 2], // win
    [2, 1]  // lose
]

let clash = [];

const getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * choices.length)
    clash.push(randomChoice);
    return randomChoice;
}
getComputerChoice()

console.log(clash) 

const getUserChoice = () => {
    let userInput = prompt('Make your choice among Rock, Scissors or Paper').toLowerCase();

    for (let i = 0; i < choices.length; i++) {
        if (userInput == choices[i]) {
            let userChoice = choices.indexOf(choices[i]);
            clash.push(userChoice);
            return userChoice
        } 
    }
}
getUserChoice();


console.log(clash) 

function playRound() {

        switch (clash) {
            case cases[[0]]: return 'You win!';
            case cases[[1]]: return 'You lose!';
            case cases[[2]]: return 'You lose!';
            case cases[[3]]: return 'You win!';
            case cases[[4]]: return 'You win!';
            case cases[[5]]: return 'You lose!';
        
            default:
                break;
        }
}

playRound()