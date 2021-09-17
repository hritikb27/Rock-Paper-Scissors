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
        if(playerSelection==moves[0] && computerPlay==moves[1]){
            alert('Computer Wins');
        }
        else if(playerSelection==moves[1] && computerPlay==moves[0]){
            alert('Player 1 Wins');
        }
        else if(playerSelection==moves[1]&&computerPlay==moves[2]){
            alert('Computer Wins');
        }
        else if(playerSelection==moves[2]&&computerPlay==moves[1]){
            alert('Player 1 Wins');
        }
        else if(playerSelection==moves[2]&&computerPlay==moves[0]){
            alert('Computer Wins');
        }
        else if(playerSelection==moves[0]&&computerPlay==moves[2]){
            alert('Player 1 Wins');
        }
        else{
            alert('Draw!')
        }
}

playRound(playerSelection(), computerPlay());