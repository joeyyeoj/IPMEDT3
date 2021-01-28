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
}
function placeAnswerText(activeObject){
    const decompOutputsText = document.getElementsByClassName('js--decompOutputText');
    const answerSlotsText = document.getElementsByClassName('js--answerSlotText');
    console.log(answerSlotsText)
    const answer = activeObject.getAttribute("text").value;
    let index = 0;

    console.log("answer: " + answer);


    for(let i = 0; i < answerSlotsText.length; i++){
      if(answerSlotsText[i].getAttribute("text").value !== ""){
        index++;

      }
    }
    console.log("index: " + index)
    switch(index){
      case 0:
        answerSlotsText[0].setAttribute("value", answer)
        break;
      case 1:
        answerSlotsText[1].setAttribute("value", answer)
        break;
      case 2:
        answerSlotsText[2].setAttribute("value", answer)
      case 3:
        checkAnswer();
        // answerSlotsText[0].setAttribute("value", answer)
        // answerSlotsText[1].setAttribute("value", answer)
        // answerSlotsText[2].setAttribute("value", answer)
        break;
    }
    activeObject.setAttribute("text", {value: ""});
}

function checkAnswer(){
  const correctInput = ["ering", "dil", "ogung"];
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
