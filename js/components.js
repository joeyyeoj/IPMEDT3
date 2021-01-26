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

AFRAME.registerComponent("puzzle3container", {
});



AFRAME.registerComponent("puzzle3word", {
  init: function() {

    this.moveWord = function() {
        // const realWorldPosition = this.el.object3D.getWorldPosition(new THREE.Vector3())
        console.log("moving Word");

        const destination = document.getElementById('js--decomposeSlot');
        // Get position of Object relative to the world (Instead of relative to parents) => new Position
        var worldPosition = new THREE.Vector3();
        destination.object3D.getWorldPosition(worldPosition);
        console.log(worldPosition);

        // temp.value = "property: position; easing: linear; dur: 2000; to: " + destination.x + destination.y + destination.z;

        // Teleport the player to the new Position
        this.setAttribute("position", {x: worldPosition.x, y: worldPosition.y, z: 0});

        console.log(this.getAttribute("position"))

    }

    this.el.addEventListener("mouseenter", this.moveWord);

  },
  update: function() {},
  tick: function() {},
  remove: function() {},
  pause: function() {},
  play: function() {}
});

AFRAME.registerComponent("puzzle3wordslot", {
  schema: {

  },
  init: function() {

  },
  update: function() {

  },
  tick: function() {},
  remove: function() {},
  pause: function() {},
  play: function() {}
});
