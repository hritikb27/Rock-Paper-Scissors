const moves = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay(){
    const random = Math.floor(Math.random()*moves.length);

    return (moves[random]);
}

function playerSelection(){
    const playerMove = prompt('Select From: Rock, Paper, Scissors:')
    const caseMove = playerMove.toUpperCase();
    return caseMove;
}

const playRound = (playerSelection, computerPlay)=>{
    breakMe: if(!(moves.includes(playerSelection))){
        alert('Enter a valid option.');
        break breakMe;}
        
        else if(playerSelection==moves[0] && computerPlay==moves[1]){
            alert(`${computerPlay} Wins! ${computerPlay} beats ${playerSelection}`);
        }
        else if(playerSelection==moves[1] && computerPlay==moves[0]){
            alert(` ${playerSelection} Wins! ${playerSelection} beats ${computerPlay}`);
        }
        else if(playerSelection==moves[1]&&computerPlay==moves[2]){
            alert(`${computerPlay} Wins! ${computerPlay} beats ${playerSelection}`);
        }
        else if(playerSelection==moves[2]&&computerPlay==moves[1]){
            alert(`${playerSelection} Wins! ${playerSelection} beats ${computerPlay}`);
        }
        else if(playerSelection==moves[2]&&computerPlay==moves[0]){
            alert(`${computerPlay} Wins! ${computerPlay} beats ${playerSelection}`);
        }
        else if(playerSelection==moves[0]&&computerPlay==moves[2]){
            alert(`${playerSelection} Wins! ${playerSelection} beats ${computerPlay}`);
        }
        else{
            alert('Draw!')
        }
}

playRound(playerSelection(), computerPlay());