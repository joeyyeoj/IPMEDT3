AFRAME.registerComponent("book", {
  schema: {
    slotPos: {type: 'number'}
  },
  init: function(){
    this.pickup = function(){
      const camera = document.getElementById("js--camera");
      console.log("picked up book")
      let box = document.createElement('a-box');
      box.setAttribute("width", this.getAttribute("width"));
      box.setAttribute("height", this.getAttribute("height"));
      box.setAttribute("depth", this.getAttribute("depth"));
      box.setAttribute("color", this.getAttribute("color"));
      box.setAttribute('book', '');
      box.setAttribute("slotPos", this.getAttribute("slotPos"));
      box.setAttribute("position", {x: 1, y: 0, z: -1});
      camera.append(box);
      this.remove()


    }

    this.el.addEventListener("click", this.pickup)


  },
  update: function(){
    const camera = document.getElementById("js--camera")
    this.el.addEventListener("click", this.pickup)
  },
  tick: function(){

  },
  remove: function(){

  },
  pause: function(){

  },
  play: function(){

  }
});

AFRAME.registerComponent("schriftslot", {
  schema: {
    slotPos: {type: 'number'}
  },
  init: function(){
    const camera = document.getElementById("js--camera");

    this.placeBook = function(){
      if(camera.childNodes[3] && this.getAttribute("slotPos") == camera.childNodes[3].getAttribute("slotPos")){
        let box = document.createElement('a-box')
        box.setAttribute("width", camera.childNodes[3].getAttribute("width"));
        box.setAttribute("height", camera.childNodes[3].getAttribute("height"));
        box.setAttribute("depth", camera.childNodes[3].getAttribute("depth"));
        box.setAttribute("color", camera.childNodes[3].getAttribute("color"));
        box.setAttribute('book', '')
        box.setAttribute("slotPos", camera.childNodes[3].getAttribute("slotPos"))
        box.setAttribute("position", "0 0 0.1")
        this.appendChild(box)
        console.log(endpuzzleResultBookSlots)
        console.l
        endpuzzleResultBookSlots[parseInt(box.getAttribute("slotPos"))] = true
        console.log(endpuzzleResultBookSlots)
        console.log(box)
        camera.childNodes[3].remove()
        checkEnd()
      }

    }

    this.el.addEventListener("click", this.placeBook)


  },
  update: function(){

  },
  tick: function(){

  },
  remove: function(){

  },
  pause: function(){

  },
  play: function(){

  }
})
