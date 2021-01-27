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





AFRAME.registerComponent("puzzle3wordblock", {
  schema: {
    wordElements: {type: "array", default: []},
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

      if (data.state === "inactive") {
        console.log("inactive triggered");
        updateSplitter(self.el);
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

AFRAME.registerComponent("puzzle3decomposer", {
  schema:{
    currentWord: {type: "selector"}
  },
  init: function() {
    var el = this.el;
    var data = this.data;
    var self = this;

    this.decomposerPos = el.getAttribute('position');
    console.log("dePOS x: " + this.decomposerPos.x);
    console.log("dePOS y: " + this.decomposerPos.y);
    console.log("dePOS z:"  + this.decomposerPos.z);

    this.el.addEventListener("click", this.eventHandlerFn, {once: true})
  },
  update: function() {
  },
});

AFRAME.registerComponent("puzzle3container", {
  init: function(){
  }
});
