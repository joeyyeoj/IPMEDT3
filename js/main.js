var startWordBlocksPositions = new Map();

window.onload = () => {
  var DECOMP_POSITION = document.getElementById('js--decomposeSlot').getAttribute('position');
  let startWordBlocks = document.querySelectorAll(['puzzle3word']);



  for(let i = 0; i < startWordBlocks.length;  i++){
    startWordBlocksPositions.set(startWordBlocks[i].id, {startPosition: startWordBlocks[i].getAttribute('position')})
  }

  for(x in startWordBlocksPositions){
    console.log(x)
  }

  // for (let i = 0; i < startWordBlocks.length; i++) {
  //   startWordBlocks[i].addEventListener('click', function(evt) {
  //     if (hold === "box"){
  //       let box = document.createElement('a-box');
  //       box.setAttribute("class", "js--pickup js--interact");
  //       box.setAttribute("color", "green");
  //       box.setAttribute("position", {x: this.getAttribute('position').x, y: "0.5", z: this.getAttribute('position').z});
  //       scene.appendChild(box);
  //       document.getElementById("js--hold").remove();
  //       addListeners();
  //       hold = null;
  //     }
  //   });
  // }
}

var numberBoxes = []
