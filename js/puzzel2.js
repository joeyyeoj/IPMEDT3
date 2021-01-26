window.onload = () =>{
answerbuttons = document.getElementsByClassName("js--answerbutton");
let solved = false;
const scene = document.getElementById("js--scene")

  for(let i=0; i<answerbuttons.length; i++){
    answerbuttons[i].addEventListener("click", function(){
      if(!solved){
        let att = document.createAttribute('animation')
        let startingpointX = answerbuttons[i].getAttribute('position').x
        let startingpointY = answerbuttons[i].getAttribute('position').y
        let startingpointZ = answerbuttons[i].getAttribute('position').z
        att.value = "property: position; easing: linear; dur: 500; to:" + answerbuttons[i].getAttribute('position').x + " " + answerbuttons[i].getAttribute('position').y +  " 0" +'"';
        answerbuttons[i].setAttribute('animation', att.value)
        if(i==3){
            let book = document.createElement('a-box')
            book.setAttribute("height", "0.2")
            book.setAttribute("width", "0.4")
            book.setAttribute("depth", "0.6")
            book.setAttribute("position", "0 0 4")
            solved = true
            setTimeout(function(){
              scene.appendChild(book)
            }, 1000)

        }
        else{
          setTimeout(function(){
              att.value = "property: position; easing: linear; dur: 500; to:" + startingpointX + " " + startingpointY+  " " + startingpointZ + '"';
              answerbuttons[i].setAttribute('animation', att.value)
          }, 600)
        }
      }
    })
  }
}
