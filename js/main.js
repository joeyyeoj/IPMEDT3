window.onload = () => {

}
const PARENT_ENTITY = document.getElementById('js--puzzle3container');
const WORD_BLOCKS = document.getElementsByClassName('js--wordBlock');
// The top block is area B, where the word's elements are passed down to the ou
const DECOMP_INPUT = document.getElementById('js--decompInput');
const DECOMP_INPUT_TEXT = document.getElementById('js--decompInputText');
const DECOMP_OUTPUTS = document.getElementsByClassName('js--decompOutput');
const DECOMP_OUTPUTS_TEXT = document.getElementsByClassName('js--decompOutputText');
const ANSWER_SLOTS = document.getElementsByClassName('js--answerSlot');

const WORD_BLOCKS_TEXT = document.querySelectorAll(['puzzel3wordtext']);
const yorubaNumbers = [];

for(let i = 0; i < WORD_BLOCKS_TEXT.length; i++){
  yorubaNumbers[i] = WORD_BLOCKS_TEXT[i].getAttribute("text");
  console.log(yorubaNumber[i]);

}


function updateSplitter(activeObject){
  let wordElements = activeObject.getAttribute("wordElements");
  switch (wordElements.length){
    case 1:
      DECOMP_OUTPUTS_TEXT[0].setAttribute("value", wordElements[0]);
      DECOMP_INPUT_TEXT.setAttribute("value", valueOf.this.id + wordElements[0]);
    case 2:
      DECOMP_OUTPUTS_TEXT[1].setAttribute("value",  wordElements[0]);
      DECOMP_OUTPUTS_TEXT[2].setAttribute("value",  wordElements[1]);
    case 3:
      DECOMP_OUTPUTS_TEXT[0].setAttribute("value",  wordElements[0]);
      DECOMP_OUTPUTS_TEXT[1].setAttribute("value",  wordElements[0]);
      DECOMP_OUTPUTS_TEXT[2].setAttribute("value",  wordElements[2]);
  }

  DECOMP_OUTPUTS_TEXT[1].setAttribute("value", wordElements[1]));
  DECOMP_OUTPUTS_TEXT[3].setAttribute("value", activeObject.getAttribute("block3"));
  DECOMP_INPUT_TEXT.setAttribute("value", activeObject.getAttribute("topBlock"));
}

// Function to display a block's decomposed state in the middle
// The atoms can be used
this.replaceBlock = function () {
  // Fill in default values before
  var topBox = document.createElement('a-box');
  var topTextBox = document.createElement('a-text');
  if (this.id !== "this")
  // let decompOutput3 = document.createElement('a-box');

  // Prepare the topBox for use
  topBox.setAttribute("id", "js--topBox");
  topBox.setAttribute("class", "js--interact")
  topBox.setAttribute("mixin", "wordblock");
  // topBox.setAttribute("width", this.getAttribute("width"));
  // topBox.setAttribute("depth", this.getAttribute("depth"));
  topBox.setAttribute("position", {x: DECOMP_POS.x, y:DECOMP_POS.y, z: 1});
  topBox.setAttribute("color", "#275");


  // Prepare the text boxes for use
  topTextBox.setAttribute("align", "center");
  topTextBox.setAttribute("width", "4");
  topTextBox.setAttribute("wrap-count", "15");
  topTextBox.setAttribute("position", {x: 0, y: 0, z: 0.55});
  var topTextBoxText;

  PARENT_ENTITY.appendChild(topBox);
  topTextBox.setAttribute("text", topTextBoxText)
  topBox.setAttribute("id", "yoruba1decomp")
  topBox.appendChild(topTextBox);

  // Fills in the decompose Output boxes based on
  switch (this.id) {
    case 'yoruba1':
    console.log("case == yoruba1")
    topTextBoxText = document.getElementById('yoruba1text').getAttribute("text")


    console.log(this.decomposedParts)
    // Place finished entities into the parent node

    // Remove the orignal node
    self.el.remove();
    break;

    case 'yoruba3':
    console.log("case == yoruba3")
    this.decomposedParts = ["eta"];
    // Remove the orignal node
    self.el.remove();
    break;

    case 'yoruba4':
    console.log("case == yoruba4")
    this.decomposedParts = ["ering"];

    break;

    case 'yoruba10':
    console.log("case == yoruba10")
    this.decomposedParts = ["ewa"];
    break;

    case 'yoruba16':
    console.log("case == yoruba16")
    this.decomposedParts = ["ering", "dil", "ogung"];
    break;

    case 'yoruba20':
    console.log("case == yoruba20")
    this.decomposedParts = ["ogung"];
    break;

    default:
    let.log("Switch case: No matching ID found.")
}
}


// // A: 2 columns on the left of the puzzle
// for(block in WORD_BLOCKS){
//   if (block.id !== object.id){
//     block.setAttribute('state', 'inactive')
//   }
// }
// for(let i = 0; i < WORD_BLOCKS; i++){
//   if(WORD_BLOCKS[i].state === "active" && ){
//     activeCounter++;
//   }

  // object.setAttribute('state', 'active');
  // console.log(object.wordElements + " " + object.getAttribute('state'));
