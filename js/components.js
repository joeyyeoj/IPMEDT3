AFRAME.registerComponent("teleportplace", {
  init: function() {
    this.teleportPlayer = function() {
      console.log("Teleporting Player");

      const camera = document.getElementById("js--camera");
      // Get position of Object relative to the world (Instead of relative to parents) => new Position
      var worldPosition = new THREE.Vector3();
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

AFRAME.registerComponent("puzzle4word", {
  init: function() {
    // Play Sound of hovered word
    this.playAudio = function() {
      console.log("Playing Audio");

      // Play the Sound of the Component
      this.components.sound.playSound();
    }
    // Click => Play Audio
    this.el.addEventListener("click", this.playAudio);
  },
  update: function() {},
  tick: function() {},
  remove: function() {},
  pause: function() {},
  play: function() {}
});

AFRAME.registerComponent("puzzle4buttonset", {
  init: function() {
    // Toggle state of LineSet
    this.toggleButtonSet = function() {
      console.log("Toggling Buttons");

      switch (this.getAttribute("state")) {
        case "down":
          setColor(this.object3D.children[0].el, "green");
          setColor(this.object3D.children[1].el, "black");
          this.setAttribute("state", "up");
          break;
        case "up":
          setColor(this.object3D.children[0].el, "black");
          setColor(this.object3D.children[1].el, "green");
          this.setAttribute("state", "down");
          break;
      }
      checkPuzzle4();
    }

    // Click => Switch Colors
    this.el.addEventListener("mouseenter", this.toggleButtonSet);
  },
  update: function() {},
  tick: function() {},
  remove: function() {},
  pause: function() {},
  play: function() {}
});
