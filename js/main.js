window.onload = () =>{
  const camera = document.getElementById("js--camera");
  const cursor = document.getElementById("js--cursor");
  const places = document.getElementsByClassName("js--place");

  const grey = "#7a7a7a";
  const red = "#ff4646";
  const yellow = "#ffe038";
  const blue = "#2969ff";
  const orange = "#fc9535";
  const green = "#35fc5d";
  const purple = "#bd35fc";

  // ===== PLACE TELEPORT =====
  for(let i=0; i < places.length; i++){
    places[i].addEventListener('click', function(evt){
      console.log("Teleport");
      let temp = document.createAttribute("animation");
      temp.value = "property: position; easing: linear; dur: 2000; to: " +
      this.getAttribute("position").x + " 2 " + this.getAttribute("position").z;
      camera.setAttribute("animation", temp.value);
    });
  }
}
