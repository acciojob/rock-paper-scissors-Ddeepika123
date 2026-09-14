//your code here
let turns = 0; 
let roundsLeft = 0; 
let userPoints = 0; 
let computerPoints = 0; 

// Required computer choice property 
// 0 = ROCK // 1 = PAPER // 2 = SCISSORS
window.computerChoose = 0; 
const choices = ["ROCK", "PAPER", "SCISSORS"];

// Get HTML elements 
const gameNumber = document.getElementById("game-number");
const playGame = document.getElementById("play-game"); 
const rock = document.getElementById("rock"); 
const paper = document.getElementById("paper"); 
const scissors = document.getElementById("scissors"); 
const roundsLeftElement = document.getElementById("rounds-left"); 
const userPointsElement = document.getElementById("user-points");
const computerPointsElement = document.getElementById("computer-points"); 
const computerChooseElement = document.getElementById("computer-choose");
const roundResultElement = document.getElementById("round-result"); 
const gameResultElement = document.getElementById("game-result"); 

// Start game
playGame.addEventListener("click", function () {
	turns = Number(gameNumber.value); 
	if (turns <= 0) { 
		alert("Please enter a valid number of turns");
					 return;
} 
	roundsLeft = turns;
	userPoints = 0; 
	computerPoints = 0;
	
	// Reset UI
	roundsLeftElement.textContent = roundsLeft;
	userPointsElement.textContent = userPoints; 
	computerPointsElement.textContent = computerPoints; 
	computerChooseElement.textContent = "-"; 
	roundResultElement.textContent = "-"; 
	gameResultElement.textContent = "-";
});

// Rock 
rock.addEventListener("click", function () {
	playRound(0); 
});
	
	 // Paper
paper.addEventListener("click", function () {
	playRound(1); 
}); 

// Scissors
scissors.addEventListener("click", function () {
	playRound(2);
}); 

// Play one round 
function playRound(userChoice) { 
	// Don't play if game hasn't started 
	if (roundsLeft <= 0) { 
		return;
	}
	// Generate computer choice
	window.computerChoose = Math.floor(Math.random() * 3); 
	const computerChoice = window.computerChoose; 
	
	// Show computer choice 
	computerChooseElement.textContent = choices[computerChoice]; 
	
	// Check result
	if (userChoice === computerChoice) { 
		// Tie
		roundResultElement.textContent = "TIE";
	} else if ( (userChoice === 0 && computerChoice === 2) ||
			   (userChoice === 1 && computerChoice === 0) || 
			   (userChoice === 2 && computerChoice === 1) ) {
		// User 
		wins userPoints++; 
		roundResultElement.textContent = "WON"; 
	} else { 
		// Computer wins
		 computerPoints++; 
		roundResultElement.textContent = "LOSE";
	} 
	// One round completed
	 roundsLeft--; 
	// Update screen
	roundsLeftElement.textContent = roundsLeft;
	userPointsElement.textContent = userPoints; 
	computerPointsElement.textContent = computerPoints; 
	// Check whether game is over 
	if (roundsLeft === 0) { 
		if (userPoints > computerPoints) { 
		gameResultElement.textContent = "WON";
		} else if (userPoints < computerPoints) {
			gameResultElement.textContent = "LOSE";
		} else { gameResultElement.textContent = "TIE"; 
		}
	} 
}