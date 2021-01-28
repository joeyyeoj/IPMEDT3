window.onload = () =>{
  const camera = document.getElementById("js--camera");
  const cursor = document.getElementById("js--cursor");
  const scene = document.getElementById("js--scene");
  const puzzleboxes = document.getElementsByClassName("js--puzzlebox");
  const puzzleslots = document.getElementsByClassName("js--puzzleslot");

  // Puzzle 1
  let hold = false;
  let opgelost = false;
  resultArray = [false, false, false, false];
  let placeCounter = 0;

  // Puzzle 2
  const answerbuttons = document.getElementsByClassName("js--answerbutton");
  let solved = false;

  for(let i=0; i<answerbuttons.length; i++){
    answerbuttons[i].addEventListener("click", function(){
      if(!solved){
        let att = document.createAttribute('animation')
        let startingpointX = answerbuttons[i].getAttribute('position').x
        let startingpointY = answerbuttons[i].getAttribute('position').y
        let startingpointZ = answerbuttons[i].getAttribute('position').z
        att.value = "property: position; easing: linear; dur: 500; to:" + answerbuttons[i].getAttribute('position').x + " " + answerbuttons[i].getAttribute('position').y +  " 0" +'"';
        answerbuttons[i].setAttribute('animation', att.value)

        // If Answer is correct --> Spawn Book
        if(i==3){
            let book = document.createElement('a-box')
            book.setAttribute("height", "0.2")
            book.setAttribute("width", "0.4")
            book.setAttribute("depth", "0.6")
            book.setAttribute("position", "0 0 4")
            solved = true
            setTimeout(function(){
              scene.appendChild(book)
            }, 1000)
        }
        else{
          setTimeout(function(){
              att.value = "property: position; easing: linear; dur: 500; to:" + startingpointX + " " + startingpointY+  " " + startingpointZ + '"';
              answerbuttons[i].setAttribute('animation', att.value)
          }, 600)
        }
      }
    })
  }


  for(let i=0; i<puzzleboxes.length; i++){
    puzzleboxes[i].addEventListener('click', function(){
      let pickedup = this
      if(!hold && !opgelost){
        //if pickedup has no id. don't give an id to newly made block
        if(!pickedup.id){
            camera.innerHTML += '<a-box width="' + pickedup.getAttribute("width") + '"' + 'depth="' + pickedup.getAttribute("depth") + '"' + 'height="' + pickedup.getAttribute("height") + '"' + 'color="' + pickedup.getAttribute("color") + '"' + 'position="1 0.25 -2"' + 'rotation="180 160 0"' + '>' + pickedup.innerHTML + '</a-box>'
        }
        else{
          //determine the id that is needed by color, correct answer order is yellow-cyan-purple-green
          if(pickedup.getAttribute("color") == "yellow"){
            camera.innerHTML += '<a-box '  + 'id="js--word1"' + 'width="' + pickedup.getAttribute("width") + '"' + 'depth="' + pickedup.getAttribute("depth") + '"' + 'height="' + pickedup.getAttribute("height") + '"' + 'color="' + pickedup.getAttribute("color") + '"' + 'position="1 0.25 -2"' + 'rotation="180 160 0"' + '>' + pickedup.innerHTML + '</a-box>'
          }
          else if(pickedup.getAttribute("color") == "cyan"){
            camera.innerHTML += '<a-box '  + 'id="js--word2"' + 'width="' + pickedup.getAttribute("width") + '"' + 'depth="' + pickedup.getAttribute("depth") + '"' + 'height="' + pickedup.getAttribute("height") + '"' + 'color="' + pickedup.getAttribute("color") + '"' + 'position="1 0.25 -2"' + 'rotation="180 160 0"' + '>' + pickedup.innerHTML + '</a-box>'
          }
          else if(pickedup.getAttribute("color") == "purple"){
            camera.innerHTML += '<a-box '  + 'id="js--word3"' + 'width="' + pickedup.getAttribute("width") + '"' + 'depth="' + pickedup.getAttribute("depth") + '"' + 'height="' + pickedup.getAttribute("height") + '"' + 'color="' + pickedup.getAttribute("color") + '"' + 'position="1 0.25 -2"' + 'rotation="180 160 0"' + '>' + pickedup.innerHTML + '</a-box>'
          }
          else if(pickedup.getAttribute("color") == "green"){
            camera.innerHTML += '<a-box '  + 'id="js--word4"' + 'width="' + pickedup.getAttribute("width") + '"' + 'depth="' + pickedup.getAttribute("depth") + '"' + 'height="' + pickedup.getAttribute("height") + '"' + 'color="' + pickedup.getAttribute("color") + '"' + 'position="1 0.25 -2"' + 'rotation="180 160 0"' + '>' + pickedup.innerHTML + '</a-box>'
          }
        }
        hold = true
        }
      }
    )
  }

  for(let i=0; i<puzzleslots.length; i++){
    puzzleslots[i].addEventListener('click', function(){
      if(hold){

        if(camera.childNodes[3].id){
          if(camera.childNodes[3].getAttribute("color") == "yellow" && i==0){
            resultArray[i] = true
          }
          if(camera.childNodes[3].getAttribute("color") == "cyan" && i==1){
            resultArray[i] = true
          }
          if(camera.childNodes[3].getAttribute("color") == "purple" && i==2){
            resultArray[i] = true
          }
          if(camera.childNodes[3].getAttribute("color") == "green" && i==3){
            resultArray[i] = true
          }
        }
        let box = document.createElement('a-box')
        box.setAttribute("width", camera.childNodes[3].getAttribute("width"))
        box.setAttribute("depth", camera.childNodes[3].getAttribute("depth"))
        box.setAttribute("height", camera.childNodes[3].getAttribute("height"))
        box.setAttribute("color", camera.childNodes[3].getAttribute("color"))
        box.setAttribute("position", "0 -0.2 0")
        box.innerHTML += camera.childNodes[3].innerHTML
        this.appendChild(box)
        camera.childNodes[3].remove()
        hold=false
        //increase playcounter by 1, when at 4 check if all 4 elements in resultArray are true: answer correst, if not: answer incorrect
        placeCounter+=1
        if(placeCounter==4 && !resultArray.includes(false)){
          opgelost = true
          for(let i=0; i<puzzleslots.length; i++){
            puzzleslots[i].childNodes[1].setAttribute("color", "#1cfc03")

            let book = document.createElement('a-box')
            book.setAttribute("height", "0.2")
            book.setAttribute("width", "0.4")
            book.setAttribute("depth", "0.6")
            book.setAttribute("position", "0 0 4")
            scene.appendChild(book)
          }
        }
        else if(placeCounter==4 && resultArray.includes(false)){
          console.log("Fout")
          for(let i=0; i<puzzleslots.length; i++){
            puzzleslots[i].childNodes[1].setAttribute("color", "red")
            setTimeout(function(){
              puzzleslots[i].childNodes[3].remove()
              puzzleslots[i].childNodes[1].setAttribute("color", "white")
            }, 500)
          }
          placeCounter = 0
        }
      }
    })
  }
}

// ========== General Functions ==========
// Change color of given Object
function setColor(object, color) {
  object.setAttribute("color", color);
}

// Change color of given Object with a delay; for a given amount of time
function setColorTimeout(object, startTime, duration) {
  let endTime = startTime + duration;
  console.log("Object will change in " + startTime + "ms for " + endTime + "ms");
  setTimeout(function(){
    setColor(object, "green");
  }, startTime);
  setTimeout(function(){
    setColor(object, "white");
    }, endTime);
}

// Play a sound from the given object
function playSound(object, audioFile) {
  console.log("Play audio on " + object.el + " with the filename " + audioFile);

  // Prepare the right audioFile
  object.setAttribute("sound", "src: #" + audioFile);
  // Play given audioFile
  object.components.sound.playSound();
}

// Dialog
function playDialog(object, value, audioFile, startTime, duration){
  let endTime = startTime + duration;

  // Change dialogText accordingly
  setTimeout(function(){
    playSound(object, audioFile);
    object.setAttribute("value", value);
    object.setAttribute("visible", true);
  }, startTime);
  setTimeout(function(){
    object.setAttribute("value", "");
    object.setAttribute("visible", false);
    }, endTime);
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
