let score = JSON.parse(localStorage.getItem('score')) || {wins : 0, loses : 0, Ties : 0};


let choice = document.querySelector(".js-choice");
let result = document.querySelector(".js-result");
let score_update = document.querySelector(".js-score");
const sound = new Audio('img/move.mp3');

score_update.innerHTML = 
    `<li>Wins : ${score.wins}</li>
    <li>Loses : ${score.loses}</li>
    <li>Ties : ${score.Ties}</li>`


function playGame(playerMove){
    sound.play();
    const cm=Math.floor(Math.random() * 3);
    let computerMove;
    if(cm===0){
        computerMove = 'Rock';
    }
    if(cm===1){
        computerMove = 'Paper';
    }
    if(cm===2){
        computerMove = 'Scissor';
    }
    
    if((playerMove === 'Rock' && computerMove === 'Scissor') || 
    (playerMove === 'Paper' && computerMove === 'Rock') || 
    (playerMove === 'Scissor' && computerMove === 'Paper'))
    {
       choice.innerText = `You choose ${playerMove}, and computer chose ${computerMove}` ;
       result.innerText = "YOU WIN."
       score.wins++;
    }
    else if(playerMove === computerMove)
    {
        choice.innerText = `You choose ${playerMove}, and computer chose ${computerMove}` ;
       result.innerText = "NO ONE WINs."
       score.Ties++;
    }
    else
    {
        choice.innerText = `You choose ${playerMove}, and computer chose ${computerMove}` ;
        result.innerText = "YOU LOST."
        score.loses++;
    }


    localStorage.setItem('score',JSON.stringify(score));
    
    score_update.innerHTML = 
    `<li>Wins : ${score.wins}</li>
    <li>Loses : ${score.loses}</li>
    <li>Ties : ${score.Ties}</li>`
   
}

function reset(){
    localStorage.clear();
    score.wins = 0;
    score.loses = 0;
    score.Ties = 0;
    result.innerText = "";
    choice.innerText = "You choose ____ , And computer choose ____ .";
    score_update.innerHTML = 
    `<li>Wins : ${score.wins}</li>
    <li>Loses : ${score.loses}</li>
    <li>Ties : ${score.Ties}</li>`
}
