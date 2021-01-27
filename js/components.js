window.onload = () => {

}
AFRAME.registerComponent("teleportplace", {
  init: function() {
    this.teleportPlayer = function() {
      console.log("Teleporting Player");

      const camera = document.getElementById("js--camera");
      // Get position of Object relative to the world (Instead of relative to parents) => new Position
      let worldPosition = new THREE.Vector3();
      worldPosition.setFromMatrixPosition(this.object3D.matrixWorld);

      // Create a temporary value with the new Position
      let temp = document.createAttribute("animation");
      temp.value = "property: position; easing: linear; dur: 2000; to: " + worldPosition.x + " 2 " + worldPosition.z;

      // Teleport the player to the new Position
      camera.setAttribute("animation", temp.value);
    }

    // Click => Teleport Player
    this.el.addEventListener("click", this.teleportPlayer);
  },
  update: function() {},
  tick: function() {},
  remove: function() {},
  pause: function() {},
  play: function() {}
});





AFRAME.registerComponent("puzzle3word", {
  schema: {
    decompOutput: {type: 'array', default: ["a", "b", "c"]},
    active: {type: 'boolean'},
    ogPos: {type: 'vec3'}
  },
  init: function() {
    // Constant variabele
    const DECOMP_POSITION = document.getElementById('#js--decomposeSlot').getAttribute('position');
    const startPosition =  this.el.getAttribute('position');
    const startPositions = {};

    var self = this;
    var el = this.el;
    var data = this.data;
    console.log("id: "+  this.el.id + "--ogPos {x:-,y:-,z:-}  " + data.ogPos.x + "  " + data.ogPos.y + "  " + data.ogPos.z)

    // Save own origin position for moving back and forth without risk of losing saved ogPos
    this.decomposedParts = ["a", "b", "c"];
    var siblings = document.querySelectorAll(['puzzle3word']);
    // This function moves a block from the word-bank to the decompose-input
    // The decomposeOutput moves into the answer-input

    this.moveWord = function () {
      if(this.getAttribute('position') === self.data.ogPos){
        el.object3D.position.set(DECOMP_POSITION.x, DECOMP_POSITION.y, DECOMP_POSITION.z);
        console.log(el.id + " to DECOMP_POS")

      } else if (
        this.getAttribute('position') === DECOMP_POSITION){
        console.log("else if -- OGPOS" + data.ogPos.x + " " + data.ogPos.y + " " + data.ogPos.z)
      } else{
        console.log("moveword_else")
      }
      self.ogPos = {x:data.ogPos.x, y:data.ogPos.y, z:data.ogPos.z}
      console.log("self.ogPos Trial" + self.ogPos.x + " " + self.ogPos.y + " " + self.ogPos.z)
      }

    // decompStore assigns the resepective decomposed parts to each word based on contained data
    // The event listener only fires ones per element
    this.decompStore = function () {
      switch (this.id) {
        case 'yoruba1':
        console.log("case == yoruba1")
        this.decomposedParts = ["", "eni", ""];
        console.log(this.decomposedParts)
        break;
        case 'yoruba3':
        console.log("case == yoruba3")
        this.decomposedParts = ["", "eta", ""];
        console.log(this.decomposedParts)
        break;
        case 'yoruba4':
        console.log("case == yoruba4")
        this.decomposedParts = ["", "ering", ""];
        console.log(this.decomposedParts)
        break;
        case 'yoruba10':
        console.log("case == yoruba10")
        this.decomposedParts = ["", "ewa", ""];
        console.log(this.decomposedParts)
        break;
        case 'yoruba16':
        console.log("case == yoruba16")
        this.decomposedParts = ["ering", "dil", "ogung"];
        console.log(this.decomposedParts)
        break;
        case 'yoruba20':
        console.log("case == yoruba20")
        this.decomposedParts = ["", "ogung", ""];
        console.log(this.decomposedParts)
        break;
        default:
        console.log("Either all parts are assigned or we're in for some bad juju. fr.")
      }
    }

    // Registers the fitting parts to the word. These will be used to display answer blocks
    this.el.addEventListener('mouseenter', this.decompStore, {once: true});
    this.el.addEventListener("click", this.moveWord, {once: true});


    // This line of code displays that the sibligns originPositions are correctly stored.
    // It's also incredibly long and I'd prefer not to type it again.
    for(let i = 0; i < siblings.length; i++){
      console.log(i + "-- x:" + siblings[i].getAttribute('puzzle3word').originPosition.x + " y:" + siblings[i].getAttribute('puzzle3word').originPosition.y + "  z:" + siblings[i].getAttribute('puzzle3word').originPosition.z )
    }





  },
  update: function(oldData) {



  },
  tick: function() {},
  remove: function() {},
  pause: function() {},
  play: function() {}
});

AFRAME.registerComponent("puzzle3decomposer", {
  schema:{
    currentWord: {type: "string"}
  },
  init: function() {
    var el = this.el;
    var data = this.data;
    var self = this;

    this.decomposerPos = el.getAttribute('position');
    console.log("dePOS x: " + this.decomposerPos.x)
    console.log("dePOS y: " + this.decomposerPos.y)
    console.log("dePOS z:"  + this.decomposerPos.z)




  },
  update: function() {

  },
});

AFRAME.registerComponent("puzzle3container", {
  init: function(){
    console.log("Puzzle")
    let siblings = document.querySelectorAll(['puzzle3word']);
    let siblingsPosById = {};
    console.log(siblings.length);
    for(let i = 0; i < siblings.length; i++){
      siblingsPosById["id"] = siblings[i].id;
      siblingsPosById["position"] = siblings[i].getAttribute('position');
      console.log( "SPBI-- ID: " + siblingsPosById["id"] + " || POS: " +  siblingsPosById["position"])

    }
  }
});
