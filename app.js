const moves = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay(){
    const random = Math.floor(Math.random()*moves.length);

    console.log(moves[random]);
}

computerPlay();