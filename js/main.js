window.onload = () =>{
  const camera = document.getElementById("js--camera");
  const cursor = document.getElementById("js--cursor");

  this.setColor = function(object, color) {
    object.setAttribute("color", color);
  }

  this.setColorTimeout = function(object, startTime, duration) {
    let endTime = startTime + duration;
    console.log("Object will change in " + startTime + "ms for " + endTime + "ms");
    setTimeout(function(){
      setColor(object, "green")
      ;}, startTime);
    setTimeout(function(){
      setColor(object, "white")
      ;}, endTime);
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

    // Disable all buttons
    for(let i = 0; i < buttonSets.length; i++){
      buttonSets[i].setAttribute("visible", false);
    }
  }
  else {
    console.log("Puzzle 4 is not Solved yet!");
  }
}
