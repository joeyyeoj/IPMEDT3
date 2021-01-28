window.onload = () => {


}
AFRAME.registerComponent("teleportplace", {
  init: function() {
    this.teleportPlayer = function() {


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





AFRAME.registerComponent("puzzle3wordblock", {
  schema: {
    number: {type: "array"},
    element: {type: "array"},
    state: {type: 'string', default: "inactive"},
    ogPos: {type: 'vec3'},
  },
  init: function() {
    // Constant positions of the destination blocks
    var self = this;
    var el = this.el;
    var data = this.data;

    var siblings = document.querySelectorAll(['puzzle3wordblock']);

    this.toggleState = function () {
      resetWordBlocks();

      if (data.state === "inactive") {
        this.flushToDom;

        this.setAttribute("opacity", "0.5")
        this.setAttribute("state", "active");

        updateSplitter(el);
      }
    }
    // Registers the fitting parts to the word. These will be used to display answer blocks
    this.el.addEventListener('click', this.toggleState);
  },
  update: function(oldData) {
  },
  tick: function() {
  },
  remove: function() {},
  pause: function() {},
  play: function() {}
});

AFRAME.registerComponent("puzzle3decompinput", {
  schema:{
    currentWord: {type: "selector"}
  },
  init: function() {
    var el = this.el;
    var data = this.data;
    var self = this;

    this.reset = function () {
      resetWordBlocks();

    }

    this.el.addEventListener("click", this.reset)
  },
  update: function() {
  },
});

AFRAME.registerComponent("puzzle3decompoutputtext", {
  schema:{
    currentWord: {type: "selector"}
  },
  init: function() {
    var el = this.el;
    var data = this.data;
    var self = this;

    this.activateBlock = function () {
      placeAnswerText(el);
      el.setAttribute("value", "")

    }

    this.el.addEventListener("click", this.activateBlock)
  },
  update: function() {
  },
});

AFRAME.registerComponent("puzzle3answertext", {
  schema:{
    currentWord: {type: "selector"}
  },
  init: function() {
    var el = this.el;
    var data = this.data;
    var self = this;

    this.removeWord = function () {
      const answerText = document.getElementsByClassName("js--answerSlotText");
      for(let i = 0; i < answerText; i++){
        answerText.getAttribute("value", "")
      }


    }

    this.el.addEventListener("click", this.removeWord)
  },
  update: function() {
  },
});



AFRAME.registerComponent("puzzle3container", {
  init: function(){
  }
});
