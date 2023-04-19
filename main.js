
const choices = ['rock', 'paper', 'scissors'];
const cases = [
    [0, 1],
    [1, 0],
    [0, 2],
    [2, 0],
    [1, 2],
    [2, 1]
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
    for (let i = 0; i < cases[0].length; i++) {
        switch (clash) {
            case cases[[i]]:
                
                break;
        
            default:
                break;
        }
        
    }
}

playRound()