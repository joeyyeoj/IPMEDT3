window.onload = () =>{
  puzzleboxes = document.getElementsByClassName("js--puzzlebox");
  let camera = document.getElementById("js--camera");
  let scene = document.getElementById("js--scene");
  scene.add(camera)
  let hold = false;


  for(let i=0; i<puzzleboxes.length; i++){
    puzzleboxes[i].addEventListener('click', function(){
      let pickedup = this
      if(!hold){
        if(!pickedup.id){
            camera.innerHTML += '<a-box width="' + this.getAttribute("width") + '"' + 'depth="' + this.getAttribute("depth") + '"' + 'height="' + this.getAttribute("height") + '"' + 'color="' + this.getAttribute("color") + '"' + 'position="1 1 -2"' + 'rotation="180 180 0"' + '>' + pickedup.innerHTML + '</a-box>'
        }
        else{
          console.log(pickedup.getAttribute("color"))
          if(pickedup.getAttribute("color") == "yellow"){
            camera.innerHTML += '<a-box '  + 'id="js--word1"' + 'width="' + this.getAttribute("width") + '"' + 'depth="' + this.getAttribute("depth") + '"' + 'height="' + this.getAttribute("height") + '"' + 'color="' + this.getAttribute("color") + '"' + 'position="1 1 -2"' + 'rotation="180 180 0"' + '>' + pickedup.innerHTML + '</a-box>'
          }
          else if(pickedup.getAttribute("color") == "cyan"){
            camera.innerHTML += '<a-box '  + 'id="js--word2"' + 'width="' + this.getAttribute("width") + '"' + 'depth="' + this.getAttribute("depth") + '"' + 'height="' + this.getAttribute("height") + '"' + 'color="' + this.getAttribute("color") + '"' + 'position="1 1 -2"' + 'rotation="180 180 0"' + '>' + pickedup.innerHTML + '</a-box>'
          }
          else if(pickedup.getAttribute("color") == "purple"){
            camera.innerHTML += '<a-box '  + 'id="js--word3"' + 'width="' + this.getAttribute("width") + '"' + 'depth="' + this.getAttribute("depth") + '"' + 'height="' + this.getAttribute("height") + '"' + 'color="' + this.getAttribute("color") + '"' + 'position="1 1 -2"' + 'rotation="180 180 0"' + '>' + pickedup.innerHTML + '</a-box>'
          }
          else if(pickedup.getAttribute("color") == "green"){
            camera.innerHTML += '<a-box '  + 'id="js--word4"' + 'width="' + this.getAttribute("width") + '"' + 'depth="' + this.getAttribute("depth") + '"' + 'height="' + this.getAttribute("height") + '"' + 'color="' + this.getAttribute("color") + '"' + 'position="1 1 -2"' + 'rotation="180 180 0"' + '>' + pickedup.innerHTML + '</a-box>'
          }
        }
        hold = true
        }
      }
    )
  }
}
