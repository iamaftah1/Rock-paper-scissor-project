const arr = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = function () {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

// console.log(getComputerChoice());

// step 2.
const getHumanChoice = function () {
  const input = prompt("Please Enter: rock, paper, scissor").toLowerCase();
  if (input === arr[0]) {
    return "rock";
  } else if (input === arr[1]) {
    return "paper";
  } else if (input === arr[2]) {
    return "scissor";
  } else {
    alert("Please Enter Correct input");
    return null;
  }
};

// console.log(getHumanChoice());

// step3.

const playRound = function (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert(
      `the human choice is ${humanChoice} and computer choice is ${computerChoice} so the game is tie`
    );
  } else if (
    (humanChoice === arr[0] && computerChoice === arr[2]) ||
    (humanChoice === arr[2] && computerChoice === arr[1]) ||
    (humanChoice === arr[1] && computerChoice === arr[0])
  ) {
    alert(
      `the human chose ${humanChoice} and the computer chose ${computerChoice} so the human  wins`
    );
    humanScore++;
  } else {
    alert(`the computer wins`);
    computerScore++;
  }
};

for (let i = 0; i < 5; i++) {
  const computerSelection = getComputerChoice();
  const humanSelection = getHumanChoice();
  if (humanSelection !== null) {
    playRound(humanSelection, computerSelection);
  }
}

alert(`humanScore: ${humanScore} and computerScore: ${computerScore}`);
