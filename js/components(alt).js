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

AFRAME.registerComponent("puzzle3container", {
});

AFRAME.registerComponent("puzzle3word", {
  multiple: true,
  schema:{

  }
  init: function() {

  },
  update: function() {
  },
  tick: function() {},
  remove: function() {},
  pause: function() {},
  play: function() {}
});

AFRAME.registerComponent("puzzle3wordpartner", {
  multiple: true,
  init: function() {

  },
  update: function() {

  },
  tick: function() {},
  remove: function() {},
  pause: function() {},
  play: function() {}
});


// OG this.moveWord()
// this.moveWord = function() {
//
//   // This condition ensures there is only one word in the decompose slot
//   if(el.getAttribute('position') !== data.ogPos){
//     el.object3D.position.set(self.data.ogPos.x, self.data.ogPos.y, self.data.ogPos.z);
//   };
//   console.log(el.getAttribute('position') == this.originPosition);
//
//   if (el.getAttribute('position') === data.ogPos){
//     // document.get(originPosition.x, originPosition.y, originPosition.z);
//     el.object3D.position.set(this.decomposeSlotPosition.x, this.decomposeSlotPosition.y, this.decomposeSlotPosition.z)
//     console.log(el.id + "current POS" + el.getAttribute("position").x + " " + el.getAttribute("position").x + " " + el.getAttribute("position").z );
//     console.log("ORIGPOS AFTER MOVE:" + originPosition.x + " " + originPosition.y + " " + originPosition.z);
//     // this.scene.object3D.updateWorldMatrix(true, true);
//   }if (el.getAttribute('position') !== this.decomposeSlotPosition) {
//     el.object3D.position.set(data.ogPos.x, data.ogPos.y, data.ogPos.z);
//   }
// }
//
// // Check if none of the other sibling entities are currently occupying the decompose slot
// // for (let i = 0; i < siblings.length; i++){
// //   if (siblings[i].getAttribute('position').x  !== siblings[i].getAttribute('puzzle3word').data.ogPos.x ){
// //     console.log("Sibling " + i + ": did not pass")
// //     siblings[i].el.object3D.position.set(siblings[i].data.ogPos.x, siblings[i].data.ogPos.y, siblings[i].data.ogPos.z);
// //   }
// // }


    // // Causes all pieces to move to the center position
    // siblings[i].object3D.position.set(decomposeSlotPosition.x, decomposeSlotPosition.y, decomposeSlotPosition.z)
    // el.object3D.position.set(decomposeSlotPosition.x, decomposeSlotPosition.y, decomposeSlotPosition.z)
    //
    // // Bring originPosition into the update scope
    // const decomposeSlotPosition = this.decomposeSlotPosition;
    // var originPosition = this.originPosition;
    // // Make sure that the code only references the object instance during update and not all instances or only the first... >_>
    // var data = this.data;
    // var el = this.el;
