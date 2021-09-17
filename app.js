const moves = ['ROCK', 'PAPER', 'SCISSORS'];
let player = 0;
let computer = 0;

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
            computer+=1;
        }
        else if(playerSelection==moves[1] && computerPlay==moves[0]){
            player+=1;
        }
        else if(playerSelection==moves[1]&&computerPlay==moves[2]){
            computer+=1;
        }
        else if(playerSelection==moves[2]&&computerPlay==moves[1]){
            player+=1;
        }
        else if(playerSelection==moves[2]&&computerPlay==moves[0]){
            computer+=1;
        }
        else if(playerSelection==moves[0]&&computerPlay==moves[2]){
            player+=1;
        }
    }

const game = ()=>{
    for(let i=0;i<=5; i++){
        playRound(playerSelection(), computerPlay());
    }

    if(computer>player){
        alert(`AI Wins, Score:- AI: ${computer}, Player: ${player}`);
    }
    else if(player>computer){
        alert(`Player Wins, Score:- Player: ${player}, AI: ${computer}`);
    }
    else if(player==computer){
        alert(`Draw!, Score:- Player: ${player}, AI: ${computer}`)
    }
    
}

game();