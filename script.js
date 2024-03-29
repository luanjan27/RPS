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
  let result = "";

  if (playerSelection != ROCK || playerSelection != SCISSORS || playerSelection != PAPER){
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

function playGame(){
  let map = {
    player: 0,
    computer: 0
  }

  for (let i=0; i<5; i++){
    let playerSelection = prompt("Make your choice!");
    let results = round(playerSelection, getComputerChoice());
    if (results === 1){
      map.player++;
    }else if (results === -1){
      map.computer++;
    }
  }
 
}
playGame();

