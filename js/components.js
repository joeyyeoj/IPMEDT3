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
    this.playTotemAudio = function() {
      console.log("Playing Audio and flashing totem's eyes");

      const puzzle4RobotText = document.getElementById("js--puzzel4RobotText");
      const totem = document.getElementById("js--totem");
      const toneHigh = document.getElementsByClassName("js--toneHigh");
      const toneLow = document.getElementsByClassName("js--toneLow");

      // Check which word is being played --> Play that word from the totem and flash eyes accordingly
      switch (this.getAttribute("value")) {
        case "mali":
          playSound(totem, "mali.mp3");
          setColorTimeout(toneHigh[0], 600, 200);
          setColorTimeout(toneHigh[1], 600, 200);
          setColorTimeout(toneLow[0], 800, 200);
          setColorTimeout(toneLow[1], 800, 200);
          break;
        case "buku":
          playSound(totem, "buku.mp3");
          setColorTimeout(toneHigh[0], 600, 50);
          setColorTimeout(toneHigh[1], 600, 50);
          setColorTimeout(toneHigh[0], 700, 50);
          setColorTimeout(toneHigh[1], 700, 50);
          break;
        case "kiyele":
          playSound(totem, "kiyele.mp3");
          setColorTimeout(toneLow[0], 700, 100);
          setColorTimeout(toneLow[1], 700, 100);
          setColorTimeout(toneHigh[0], 900, 50);
          setColorTimeout(toneHigh[1], 900, 50);
          setColorTimeout(toneLow[0], 1050, 50);
          setColorTimeout(toneLow[1], 1050, 50);
          break;
      }

      let currentDialoogIndex = parseInt(puzzle4RobotText.getAttribute("eventCounter"))

      switch (currentDialoogIndex) {
        case 0:
          playDialog(puzzle4RobotText, "Heh.. Huh? Wie zei dat?", "robotwiezeidat.mp3", 1500, 5000);
          break;
        case 1:
          playDialog(puzzle4RobotText, "Kan de totempaal... praten? Heh.", "robotkantotempraten.mp3", 1500, 5000);
          break;
      }

      currentDialoogIndex++;
      puzzle4RobotText.setAttribute("eventCounter", currentDialoogIndex);


    }
    // Click => Play Audio
    this.el.addEventListener("click", this.playTotemAudio);
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
    ogPos: {type: 'vec3'}
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
  update: function() {},
  tick: function() {},
  remove: function() {},
  pause: function() {},
  play: function() {}
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
  update: function() {},
  tick: function() {},
  remove: function() {},
  pause: function() {},
  play: function() {}
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
  update: function() {},
  tick: function() {},
  remove: function() {},
  pause: function() {},
  play: function() {}
});
