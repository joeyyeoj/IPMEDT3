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
