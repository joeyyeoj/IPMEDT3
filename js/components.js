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

      const toneHigh = document.getElementsByClassName("js--toneHigh");
      const toneLow = document.getElementsByClassName("js--toneLow");

      // Check which word is being played
      switch (this.getAttribute("value")) {
        case "mali":
          setColorTimeout(toneHigh[0], 600, 200);
          setColorTimeout(toneHigh[1], 600, 200);
          setColorTimeout(toneLow[0], 800, 200);
          setColorTimeout(toneLow[1], 800, 200);
          break;
        case "buku":
          setColorTimeout(toneHigh[0], 600, 50);
          setColorTimeout(toneHigh[1], 600, 50);
          setColorTimeout(toneHigh[0], 700, 50);
          setColorTimeout(toneHigh[1], 700, 50);
          break;
        case "kiyele":
          setColorTimeout(toneLow[0], 700, 100);
          setColorTimeout(toneLow[1], 700, 100);
          setColorTimeout(toneHigh[0], 900, 50);
          setColorTimeout(toneHigh[1], 900, 50);
          setColorTimeout(toneLow[0], 1050, 50);
          setColorTimeout(toneLow[1], 1050, 50);
      }
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
