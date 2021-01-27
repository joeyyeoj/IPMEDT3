window.onload = () =>{
  puzzleboxes = document.getElementsByClassName("js--puzzlebox");
  puzzleslots = document.getElementsByClassName("js--puzzleslot")
  let camera = document.getElementById("js--camera");
  let scene = document.getElementById("js--scene");
  scene.add(camera)
  let hold = false;
  let opgelost = false;
  resultArray = [false, false, false, false]
  let placeCounter = 0

  for(let i=0; i<puzzleboxes.length; i++){
    puzzleboxes[i].addEventListener('click', function(){
      let pickedup = this
      if(!hold && !opgelost){
        //if pickedup has no id. don't give an id to newly made block
        if(!pickedup.id){
            camera.innerHTML += '<a-box width="' + pickedup.getAttribute("width") + '"' + 'depth="' + pickedup.getAttribute("depth") + '"' + 'height="' + pickedup.getAttribute("height") + '"' + 'color="' + pickedup.getAttribute("color") + '"' + 'position="1 0.25 -2"' + 'rotation="180 160 0"' + '>' + pickedup.innerHTML + '</a-box>'
        }
        else{
          //determine the id that is needed by color, correct answer order is yellow-cyan-purple-green
          if(pickedup.getAttribute("color") == "yellow"){
            camera.innerHTML += '<a-box '  + 'id="js--word1"' + 'width="' + pickedup.getAttribute("width") + '"' + 'depth="' + pickedup.getAttribute("depth") + '"' + 'height="' + pickedup.getAttribute("height") + '"' + 'color="' + pickedup.getAttribute("color") + '"' + 'position="1 0.25 -2"' + 'rotation="180 160 0"' + '>' + pickedup.innerHTML + '</a-box>'
          }
          else if(pickedup.getAttribute("color") == "cyan"){
            camera.innerHTML += '<a-box '  + 'id="js--word2"' + 'width="' + pickedup.getAttribute("width") + '"' + 'depth="' + pickedup.getAttribute("depth") + '"' + 'height="' + pickedup.getAttribute("height") + '"' + 'color="' + pickedup.getAttribute("color") + '"' + 'position="1 0.25 -2"' + 'rotation="180 160 0"' + '>' + pickedup.innerHTML + '</a-box>'
          }
          else if(pickedup.getAttribute("color") == "purple"){
            camera.innerHTML += '<a-box '  + 'id="js--word3"' + 'width="' + pickedup.getAttribute("width") + '"' + 'depth="' + pickedup.getAttribute("depth") + '"' + 'height="' + pickedup.getAttribute("height") + '"' + 'color="' + pickedup.getAttribute("color") + '"' + 'position="1 0.25 -2"' + 'rotation="180 160 0"' + '>' + pickedup.innerHTML + '</a-box>'
          }
          else if(pickedup.getAttribute("color") == "green"){
            camera.innerHTML += '<a-box '  + 'id="js--word4"' + 'width="' + pickedup.getAttribute("width") + '"' + 'depth="' + pickedup.getAttribute("depth") + '"' + 'height="' + pickedup.getAttribute("height") + '"' + 'color="' + pickedup.getAttribute("color") + '"' + 'position="1 0.25 -2"' + 'rotation="180 160 0"' + '>' + pickedup.innerHTML + '</a-box>'
          }
        }
        hold = true
        }
      }
    )
  }

  for(let i=0; i<puzzleslots.length; i++){
    puzzleslots[i].addEventListener('click', function(){
      if(hold){

        if(camera.childNodes[3].id){
          if(camera.childNodes[3].getAttribute("color") == "yellow" && i==0){
            resultArray[i] = true
          }
          if(camera.childNodes[3].getAttribute("color") == "cyan" && i==1){
            resultArray[i] = true
          }
          if(camera.childNodes[3].getAttribute("color") == "purple" && i==2){
            resultArray[i] = true
          }
          if(camera.childNodes[3].getAttribute("color") == "green" && i==3){
            resultArray[i] = true
          }
        }
        let box = document.createElement('a-box')
        box.setAttribute("width", camera.childNodes[3].getAttribute("width"))
        box.setAttribute("depth", camera.childNodes[3].getAttribute("depth"))
        box.setAttribute("height", camera.childNodes[3].getAttribute("height"))
        box.setAttribute("color", camera.childNodes[3].getAttribute("color"))
        box.setAttribute("position", "0 -0.2 0")
        box.innerHTML += camera.childNodes[3].innerHTML
        this.appendChild(box)
        camera.childNodes[3].remove()
        hold=false
        //increase playcounter by 1, when at 4 check if all 4 elements in resultArray are true: answer correst, if not: answer incorrect
        placeCounter+=1
        if(placeCounter==4 && !resultArray.includes(false)){
          opgelost = true
          for(let i=0; i<puzzleslots.length; i++){
            puzzleslots[i].childNodes[1].setAttribute("color", "#1cfc03")

            let book = document.createElement('a-box')
            book.setAttribute("height", "0.2")
            book.setAttribute("width", "0.4")
            book.setAttribute("depth", "0.6")
            book.setAttribute("position", "0 0 4")
            scene.appendChild(book)
          }
        }
        else if(placeCounter==4 && resultArray.includes(false)){
          console.log("Fout")
          for(let i=0; i<puzzleslots.length; i++){
            puzzleslots[i].childNodes[1].setAttribute("color", "red")
            setTimeout(function(){
              puzzleslots[i].childNodes[3].remove()
              puzzleslots[i].childNodes[1].setAttribute("color", "white")
            }, 500)
          }
          placeCounter = 0
        }
      }
    })
  }
}
