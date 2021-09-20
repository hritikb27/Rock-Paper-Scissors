const getMove = document.querySelectorAll('.play');
const aI = document.querySelector('#ai');
const player1 = document.querySelector('#player');
const hideDiv = document.querySelector('.hideWinner');
const winner = document.querySelector('#winner');
const getRound = document.querySelector('#round');

const moves = ['ROCK', 'PAPER', 'SCISSORS'];
let player = 0;
let computer = 0;
let round = 1;

function computerPlay(){
    const random = Math.floor(Math.random()*moves.length);

    return (moves[random]);
}

const playRound = (playerSelection, computerPlay)=>{
    
        
        if(playerSelection==moves[0] && computerPlay==moves[1]){
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

Array.from(getMove, (e)=>{
    e.addEventListener('click', ()=>{
        getRound.textContent = `Score: Round ${round}!`;
        if(round===5){
            hideDiv.style.display = 'block';
            if(computer>player){
                winner.textContent = 'Winner is AI!';
            }else{
                winner.textContent = 'Winner is Player';
            }
            alert(`Score= Player: ${player}, AI: ${computer}`)
            return;
        }
        const playerMove = e.getAttribute('id');
        const caseMove = playerMove.toUpperCase();
        playRound(caseMove, computerPlay());
        console.log(computer, player);
        aI.textContent = `AI: ${computer}`;
        player1.textContent = `Player: ${player}`;
        round++;
    })
});