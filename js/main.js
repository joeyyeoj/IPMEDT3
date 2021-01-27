var startWordBlocksPositions = new Map();

window.onload = () => {
  var DECOMP_POSITION = document.getElementById('js--decomposeSlot').getAttribute('position');
  let startWordBlocks = document.querySelectorAll(['puzzle3word']);



  for(let i = 0; i < startWordBlocks.length;  i++){
    startWordBlocksPositions.set(startWordBlocks[i].id, {startPosition: startWordBlocks[i].getAttribute('position')})
  }

}

for(x in startWordBlocksPositions){
  console.log(x)
}
