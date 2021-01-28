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


    for(let i = 0; i < siblings.length; i++){
      console.log("sibling test: " + i + "-- x:" + siblings[i].getAttribute('puzzle3word').originPosition.x + " y:" + siblings[i].getAttribute('puzzle3word').originPosition.y + "  z:" + siblings[i].getAttribute('puzzle3word').originPosition.z )
    // }

    this.replaceBlock = function () {
      // Fill in default values before
      var topBox = document.createElement('a-box');
      var topTextBox = document.createElement('a-text');
      if (this.id !== "this")
      // let decompOutput3 = document.createElement('a-box');

      // Prepare the topBox for use
      topBox.setAttribute("id", "js--topBox");
      topBox.setAttribute("class", "js--interact")
      topBox.setAttribute("mixin", "wordblock");
      // topBox.setAttribute("width", this.getAttribute("width"));
      // topBox.setAttribute("depth", this.getAttribute("depth"));
      topBox.setAttribute("position", {x: DECOMP_POS.x, y:DECOMP_POS.y, z: 1});
      topBox.setAttribute("color", "#275");


      // Prepare the text boxes for use
      topTextBox.setAttribute("align", "center");
      topTextBox.setAttribute("width", "4");
      topTextBox.setAttribute("wrap-count", "15");
      topTextBox.setAttribute("position", {x: 0, y: 0, z: 0.55});
      var topTextBoxText;

      PARENT_ENTITY.appendChild(topBox);
      topTextBox.setAttribute("text", topTextBoxText)
      topBox.setAttribute("id", "yoruba1decomp")
      topBox.appendChild(topTextBox);

      // Fills in the decompose Output boxes based on
      switch (this.id) {
        case 'yoruba1':
        console.log("case == yoruba1")
        topTextBoxText = document.getElementById('yoruba1text').getAttribute("text")


        console.log(this.decomposedParts)
        // Place finished entities into the parent node

        // Remove the orignal node
        self.el.remove();
        break;

        case 'yoruba3':
        console.log("case == yoruba3")
        this.decomposedParts = ["eta"];
        // Remove the orignal node
        self.el.remove();
        break;

        case 'yoruba4':
        console.log("case == yoruba4")
        this.decomposedParts = ["ering"];

        break;

        case 'yoruba10':
        console.log("case == yoruba10")
        this.decomposedParts = ["ewa"];
        break;

        case 'yoruba16':
        console.log("case == yoruba16")
        this.decomposedParts = ["ering", "dil", "ogung"];
        break;

        case 'yoruba20':
        console.log("case == yoruba20")
        this.decomposedParts = ["ogung"];
        break;

        default:
        let.log("Switch case: No matching ID found.")
    }
    }
