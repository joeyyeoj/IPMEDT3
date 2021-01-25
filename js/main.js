window.onload = () =>{
  const camera = document.getElementById("js--camera");
  const cursor = document.getElementById("js--cursor");
  const paintbrush = document.getElementById("js--paintbrush");
  const pixels = document.getElementsByClassName("js--pixel");
  const colorSpheres = document.getElementsByClassName("js--colorSphere");
  const colorMixers = document.getElementsByClassName("js--colorMixer");
  const reset = document.getElementsByClassName("js--reset");
  const places = document.getElementsByClassName("js--place");
  const paintpallet = document.getElementById("js--paintpallet");

  const grey = "#7a7a7a";
  const red = "#ff4646";
  const yellow = "#ffe038";
  const blue = "#2969ff";
  const orange = "#fc9535";
  const green = "#35fc5d";
  const purple = "#bd35fc";

  let brush = grey;

  console.log(camera);

  function updateBrush(color){
    brush = color;
    cursor.setAttribute("material", "color: " + brush + "; shader: flat");
    paintbrush.setAttribute("color", brush);
  }

  function updateBrushMixer(i, color){
    brush = color;
    cursor.setAttribute("material", "color: " + brush + "; shader: flat");
    paintbrush.setAttribute("color", brush);
    colorMixers[i].setAttribute("color", grey);
  }


  // ===== PLACE TELEPORT =====
  for(let i=0; i < places.length; i++){
    places[i].addEventListener('click', function(evt){
      console.log("Teleport");
      let temp = document.createAttribute("animation");
      temp.value = "property: position; easing: linear; dur: 2000; to: " +
      this.getAttribute("position").x + " 0 " + this.getAttribute("position").z;
      camera.setAttribute("animation", temp.value);
      console.log(i);
      switch(i){
        case 0:
          paintpallet.setAttribute("rotation", "0 90 0");
          break;
        case 1:
          paintpallet.setAttribute("rotation", "0 0 0");
          break;
        case 2:
          paintpallet.setAttribute("rotation", "0 -90 0");
          break;
        case 3:
          paintpallet.setAttribute("rotation", "0 -180 0");
          break;
      }
    });
  }

  // ===== COLOR PICKING =====
  for(let i=0; i < colorSpheres.length; i++){
    // Op sphere Hover; Doe iets
    colorSpheres[i].onmouseenter = (event) => {
      updateBrush(colorSpheres[i].getAttribute("color"));
    }
  }

  // ===== COLOR MIXING =====
  for(let i=0; i < colorMixers.length; i++){
    // Op sphere Hover; Doe iets
    colorMixers[i].onmouseenter = (event) => {
      colorMixerTempColor = colorMixers[i].getAttribute("color");
      switch(colorMixerTempColor){
        case red:
          switch(brush){
            case yellow:
              colorMixers[i].setAttribute("color", orange);
              break;
            case blue:
              colorMixers[i].setAttribute("color", purple);
              break;}
          break;
        case yellow:
          switch(brush){
            case red:
              colorMixers[i].setAttribute("color", orange);
              break;
            case blue:
              colorMixers[i].setAttribute("color", green);
              break;}
          break;
        case blue:
          switch(brush){
            case red:
              colorMixers[i].setAttribute("color", purple);
              break;
            case yellow:
              colorMixers[i].setAttribute("color", green);
              break;}
          break;
        case orange:
          updateBrushMixer(i, orange);
          break;
        case green:
          updateBrushMixer(i, green);
          break;
        case purple:
          updateBrushMixer(i, purple);
          break;
        default:
          switch(brush){
            case red:
              colorMixers[i].setAttribute("color", red);
              break;
            case yellow:
              colorMixers[i].setAttribute("color", yellow);
              break;
            case blue:
              colorMixers[i].setAttribute("color", blue);
              break;
          }
      }
    }
  }

  // ===== RESET COLOR =====
  for(let i=0; i < reset.length; i++){
    reset[i].onmouseenter = (event) => {
      console.log("reset");
      updateBrush(grey);
      for(let i=0; i < pixels.length; i++){
        pixels[i].setAttribute("color", "#7a7a7a");
      }
      for(let i=0; i < colorMixers.length; i++){
        colorMixers[i].setAttribute("color", grey);
      }
    }
  }

  // ===== DRAWING =====
  for(let i=0; i < pixels.length; i++){
    pixels[i].onmouseenter = (event) => {
      console.log("pixels");
      pixels[i].setAttribute("color", brush);
    }
  }
}
