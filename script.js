function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let randIndex = Math.floor(Math.random() * options.length);
  let selection = options[randIndex];
  return selection;
}

function round(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  const ROCK = "rock";
  const PAPER = "paper";
  const SCISSORS = "scissors";
  let result = null;

  if (playerSelection !== ROCK && playerSelection !== SCISSORS && playerSelection !== PAPER){
    return 2;
  }
  if (
    (playerSelection === ROCK && computerSelection === PAPER) ||
    (playerSelection === SCISSORS && computerSelection === ROCK) ||
    (playerSelection === PAPER && computerSelection === SCISSORS)
  ) {
    result = -1;
  }
  else if(playerSelection === computerSelection){
    result = 0
  }
  else {
    result = 1;
  }
  return result;
}
let score = {
  player:0,
  computer:0
}
function playGame(){
  let container = document.querySelector(".container");
  let computer_section = document.querySelector(".computer_section");
  let imgComputer = document.createElement("img");
  let result = null;

  container.addEventListener("click", (e) => {
    let target = e.target;
    let computerChoice = getComputerChoice()
    result = round(target.value, computerChoice);
    showComputerSelection(computer_section, computerChoice, imgComputer);


    switch(result){
      case 1:
        score.player++;
        break;
      case -1:
        score.computer++;
        break;
    }

    
    showScore(score.player, score.computer);
    showWinner(score.player, score.computer)
    
  });
 
}

function showComputerSelection(computer_section, computerChoice, imgComputer){
  imgComputer.src = `images/${computerChoice}.png`
  computer_section.appendChild(imgComputer);

}

function showScore(player, computer){
  let score_section = document.querySelector(".score_section");
  score_section.textContent = `You ${player} | Machine ${computer}`
}

function showWinner(player, computer){
  let winner_section = document.querySelector(".winner_section");
  if (player == 5){
    winner_section.textContent = "You won!"
    resetGame()
  }
  else if (computer == 5){
    winner_section.textContent = "Machine Won"
    resetGame();
  }
}

function resetGame(){
  score.player = 0;
  score.computer = 0;
}

  
playGame()


  




