/*var randomNum = Math.round(Math.random()*100)
//var randomNum = 50;
console.log("random " + randomNum);*/


function compare(){
var randomNum = Math.round(Math.random()*100)
console.log("random " + randomNum);

 //computer select 
  var n = randomNum;
  var computerChoice;
    
    if (n < 34) {
      computerChoice = "scissors";
    }
    else if (n <= 67) {
      computerChoice = "rock";
    }
    else
      computerChoice = "paper";

//console.log("com "+  n + " " + computerChoice);

//user Selection
  var userChoice;
    if(document.getElementById("scissors").checked == true){
      userChoice = "scissors";
}
  else if (document.getElementById("rock").checked == true){
    userChoice = "rock";
  }
  else if (document.getElementById("paper").checked == true){
    userChoice = "paper";
  }

//console.log("user" + userChoice);

var output = document.getElementById("output");

//draw
  if (userChoice === computerChoice) {
  output.textContent = "draw";
}
//scissors
else if (userChoice === "scissors") {
  if (computerChoice === "paper"){
    output.textContent = "You Win!";
  }
    else {
      output.textContent = "You Lose!";
    }
  }

  //rock
  else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      output.textContent = "You Win!";
    }
      else {
        output.textContent = "You Lose!";
      }
    }
  
    //paper
    else if (userChoice === "paper") {
      if (computerChoice === "rock") {
        output.textContent = "You Win!";
      }
      else {
        output.textContent = "You Lose!";
      }

    }
}


