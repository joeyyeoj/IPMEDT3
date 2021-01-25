window.onload = () =>{
  const camera = document.getElementById("js--camera");
  const cursor = document.getElementById("js--cursor");

  const grey = "#7a7a7a";
  const red = "#ff4646";
  const yellow = "#ffe038";
  const blue = "#2969ff";
  const orange = "#fc9535";
  const green = "#35fc5d";
  const purple = "#bd35fc";

  this.setColor = function(object, color) {
    object.setAttribute("color", color);
  }
}

function checkPuzzle4() {
  // The answer for the puzzle from left to right in an Array
  const solvedButtonValues = ["up", "down", "up", "up", "down", "up", "down"];
  // All buttonSets in an Array
  const buttonSets = document.getElementsByClassName("js--buttonset");
  // For counting the correctAnswers when comparing each buttonState
  let correctAnswers = 0;

  // For each buttonset => Check if correct => correctAnswers++
  for(let i = 0; i < buttonSets.length; i++){
    if(solvedButtonValues[i] == buttonSets[i].getAttribute("state")) {
      correctAnswers++;
    }
  };

  // If all answers are correct; Solved!
  if (correctAnswers == 7) {
    console.log("Puzzle 4 is Solved!");
    // Maak het boek visible!
    const book4 = document.getElementById("js--puzzle4Book");
    book4.setAttribute("visible", true);

    for(let i = 0; i < buttonSets.length; i++){
      buttonSets[i].setAttribute("visible", false);
    }
  }
  else {
    console.log("Puzzle 4 is not Solved yet!");
  }
}
