
const choices = ['rock', 'paper', 'scissors'];
let userCount = 0, computerCount = 0;

let clash;
const cases = [
    [0, 1], // win
    [1, 0], // lose
    [0, 2], // lose
    [2, 0], // win
    [1, 2], // win
    [2, 1], // lose
    [0, 0], // draw
    [1, 1], // draw
    [2, 2], // draw
]

const getComputerChoice = () => {
    clash = [];
    let randomChoice = Math.floor(Math.random() * choices.length)
    clash.push(randomChoice);
}

const getUserChoice = () => {
    let userInput = prompt('Make your choice among Rock, Scissors or Paper').toLowerCase();
    let userChoice;

    for (let i = 0; i < choices.length; i++) {
        if (userInput == choices[i]) {
            userChoice = choices.indexOf(choices[i]);
            clash.push(userChoice);
        } 
    }
}

function playRound() {
    let result = null;

        switch (clash.toString()) {

            case cases[0].toString():
            case cases[3].toString():
            case cases[4].toString():
            result = 'You win!';
            ++userCount
            break;

            case cases[1].toString():
            case cases[2].toString():
            case cases[5].toString():
            result = 'You lose!';
            ++computerCount
            break;

            case cases[7].toString():
            case cases[8].toString():
            case cases[9].toString():
            result = 'Draw!';
            break;

            default:
                throw new Error('Something wrong!');
        }

        return result;
}

function play() {
    getComputerChoice()
    getUserChoice()
    
    console.log(`Computer choice: ${choices[clash[0]]}`);
    console.log(`Your choice: ${choices[clash[1]]}`);
    console.log(playRound())
    console.log(`You - ${userCount}\nComputer - ${computerCount}`);
}

function playWithScore(){
    for (let i = 0; i < 5; i++) {
        play()
    }

    if (userCount > computerCount){
        console.log('YOU ARE THE WINNER!')
    } else if (userCount == computerCount){
        console.log('Draw!')
    } else {
        console.log('Maybe bad luck?')
    }
}
playWithScore()
