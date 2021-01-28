window.onload = () => {
  //const PARENT_ENTITY = document.getElementById('js--puzzle3container');
  //const wordBlocks = document.getElementsByClassName('js--wordBlock');
  //const DECOMP_INPUT = document.getElementById('js--decompInput');
  //const DECOMP_OUTPUTS = document.getElementsByClassName('js--decompOutput');
}

function updateSplitter(activeObject){
  let wordElements = activeObject.getAttribute("puzzle3wordblock").element;
  let wordNumber = activeObject.getAttribute("puzzle3wordblock").number;
  const decompInputText = document.getElementById('js--decompInputText');
  const decompOutputsText = document.getElementsByClassName('js--decompOutputText');

  decompInputText.setAttribute("text", {value: wordNumber});

  switch (wordElements.length){
    case 1:
    decompOutputsText[0].setAttribute("value", "");
    decompOutputsText[1].setAttribute("value", wordElements[0]);
    decompOutputsText[2].setAttribute("value", "");

    break;
    case 2:
    decompOutputsText[1].setAttribute("value",  wordElements[0]);
    decompOutputsText[2].setAttribute("value",  wordElements[1]);
    decompOutputsText[2].setAttribute("value",  "");
    break;
    case 3:
    decompOutputsText[0].setAttribute("value",  wordElements[0]);
    decompOutputsText[1].setAttribute("value",  wordElements[1]);
    decompOutputsText[2].setAttribute("value",  wordElements[2]);
    break;
  }
};

function resetWordBlocks(){
  const wordBlocks = document.getElementsByClassName('js--wordBlock');
  const decompInputText = document.getElementById('js--decompInputText');
  const decompOutputsText = document.getElementsByClassName('js--decompOutputText');

  for(let i = 0; i < wordBlocks.length; i++){
    wordBlocks[i].setAttribute("material", "opacity", "1");
  }
  decompOutputsText[0].setAttribute("value", "");
  decompOutputsText[1].setAttribute("value", "");
  decompOutputsText[2].setAttribute("value", "");

  decompInputText.setAttribute("text", {value: ""});
};

function placeAnswerText(activeObject){
  const decompOutputsText = document.getElementsByClassName('js--decompOutputText');
  const answerSlotsText = document.getElementsByClassName('js--answerSlotText');
  console.log(answerSlotsText)
  const answer = activeObject.getAttribute("text").value;
  let index = 0;


  for(let i = 0; i < answerSlotsText.length; i++){
    if(answerSlotsText[i].getAttribute("text").value !== ""){
      index++;
    }
  }

  switch(index){
    case 0:
    answerSlotsText[0].setAttribute("value", answer)
    break;
    case 1:
    answerSlotsText[1].setAttribute("value", answer)
    break;
    case 2:
    answerSlotsText[2].setAttribute("value", answer)
    checkAnswer();
    break;
  }
  activeObject.setAttribute("text", {value: ""});
}

function checkAnswer(){
  const red = "#958";
  const green = "#262";
  const midgray = "#555";
  const correctInput = ["eta", "dil", "ogung"];
  const answerSlotsText = document.getElementsByClassName("js--answerSlotText");
  let correctAnswers = 0;

  for(let i = 0; i < answerSlotsText.length; i++){
    if (answerSlotsText[i].getAttribute("value") === correctInput[i]){
      correctAnswers++;
      console.log(i + ": correct")
    }else{
      console.log(i + ": incorrect")
    }
  }

  // Gives the book with a correct answer or resets the puzzle with a wrong answer
  if(correctAnswers === 3){
    answerSlotsText[0].setAttribute("material", "color", "#262");
    answerSlotsText[1].setAttribute("material", "color", "#262");
    answerSlotsText[2].setAttribute("material", "color", "#262");
    giveBook();
  }else{
    for(let i = 0; i < answerSlotsText.length; i++){

      answerSlotsText[i].setAttribute("value", " ")
    }

  }
}


function giveBook(){
  let book = document.createElement('a-box');
  book.setAttribute("geometry", {
    height: 2,
    width: 4,
    depth: 0.1
  })
  book.setAttribute("material", "color", "#a4a");
  book.setAttribute("position",{x: 5, y: 1.5, z: 5});
  const puzzleContainer = document.getElementById('js--puzzle3parent');
  puzzleContainer.appendChild(book);

}


// Function to display a block's decomposed state in the middle
// The atoms can be used



// // A: 2 columns on the left of the puzzle
// for(block in wordBlocks){
//   if (block.id !== object.id){
//     block.setAttribute('state', 'inactive')
//   }
// }
// for(let i = 0; i < wordBlocks; i++){
//   if(wordBlocks[i].state === "active" && ){
//     activeCounter++;
//   }

// object.setAttribute('state', 'active');
// console.log(object.wordElements + " " + object.getAttribute('state'));
