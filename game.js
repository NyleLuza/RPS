let computerSelection;
  let playerSelection;
  let playerCount = 0;
  let compCount = 0;
  const tied = "tie";

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const playerPoints = document.querySelector('#playerScore');
const win = document.querySelector('#winner');
const computerPoints = document.querySelector('#computerScore');

const btn = document.querySelectorAll('.btn');

function showImage(imageId){
  document.getElementById(imageId).style.display = 'block';
}
function hideImage(imageId){
  document.getElementById(imageId).style.display = 'none';
}

rock.addEventListener('click',()=>{
  playerSelection = rock.id;
  showImage('rockImage');
  hideImage('scissorsImage');
  hideImage('paperImage');
  playRound(playerSelection, getComputerChoice());
});

paper.addEventListener('click',()=>{
  playerSelection = paper.id;
  showImage('paperImage');
  hideImage('rockImage');
  hideImage('scissorsImage');
 //paperI.classList.toggle("visible")
  playRound(playerSelection, getComputerChoice());
  
});

scissors.addEventListener('click',()=>{
  playerSelection = scissors.id;
  showImage('scissorsImage');
  hideImage('rockImage');
  hideImage('paperImage');
  //scissorsI.classList.toggle("visible")
  playRound(playerSelection, getComputerChoice());
  
});

function getComputerChoice() {
    let result;
    let x = Math.floor(Math.random() * 3);
    switch (x) {
      case 0:
        result = "rock";
        showImage('crockImage');
        hideImage('cscissorsImage');
        hideImage('cpaperImage');
        break;
      case 1:
        result = "paper";
        showImage('cpaperImage');
        hideImage('crockImage');
        hideImage('cscissorsImage');
        break;
      case 2:
        result = "scissors";
        showImage('cscissorsImage');
        hideImage('crockImage');
        hideImage('cpaperImage');
        break;
    }
    return result;
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection.length == computerSelection.length){
      //console.log("It's a Tie");
      isWinner("Tie Round");
      if(compCount==5&&playerCount==5){
        isWinner("Tied",playerCount);
      }
      return tied;
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
      //console.log("Human Wins Round");
      playerCount++;
      isWinner("Human Wins this round!", playerCount);
      playerPoints.textContent = `${playerCount}`;
      if(playerCount==5){
        isWinner("Human Wins Game!", playerCount);
      }
      
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
      //console.log("Human Wins Round");
      
      playerCount++;
      isWinner("Human Wins this round!", playerCount);
      playerPoints.textContent = `${playerCount}`;
      if(playerCount==5){
        isWinner("Human Wins Game!",playerCount);
      }
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
      //console.log("Human Wins Round");
      playerCount++;
      isWinner("Human Wins this round!", playerCount);
      playerPoints.textContent = `${playerCount}`;
      if(playerCount==5){
        isWinner("Human Wins Game!", playerCount);
      }
    }
    else{
      //console.log("computer wins round");   
      compCount++;
      isWinner("Computer Wins this round!",playerCount);
      computerPoints.textContent = `${compCount}`;
      if(compCount==5){
        isWinner("Computer Wins Game!",compCount);
      }
    }
  }

  function isWinner(str, count){
    winner.textContent = str;
    if(count == 5){
    resetGame();
    }
  }

  function resetGame(){
    showImage('restart');
    playerCount = 0;
    compCount = 0;
    playerPoints.textContent = `${playerCount}`;
    computerPoints.textContent = `${compCount}`;
  }


