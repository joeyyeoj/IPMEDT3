endpuzzleResultBookSlots = [false, false, false, false, false]
endpuzzleColors = [false, false, false, false, false]
endOpgelost = false;

function checkEnd(){
  if(!endpuzzleResultBookSlots.includes(false) && !endpuzzleColors.includes(false)){
      endOpgelost = true;
      console.log("opgelost")
      //code om deur te openen!
  }
}

window.onload = () =>{
const camera = document.getElementById("js--camera")
const colorselect = document.getElementsByClassName("js--colorselect");
console.log(colorselect);
  console.log(endOpgelost)
  for(let i=0; i<colorselect.length; i++){
    for(let y=1; y<colorselect[i].childNodes.length; y+=2){
      colorselect[i].childNodes[y].addEventListener("click", function(){
        if(!endOpgelost){
          colorselect[i].childNodes[y].setAttribute("opacity", "1");
          colorselect[i].childNodes[y].classList.add("js--activeColor")
          if(colorselect[i].childNodes[y].classList.contains("js--activeColor") && colorselect[i].childNodes[y].classList.contains("js--correctcolor")){
            console.log(endpuzzleColors)
            endpuzzleColors[i] = true
            console.log(endpuzzleColors)
            checkEnd()
          }
          else{
            console.log(endpuzzleColors)
            endpuzzleColors[i] = false
            console.log(endpuzzleColors)
          }
          for(let x=1; x<colorselect[i].childNodes.length; x+=2){
            if(x!=y){
              colorselect[i].childNodes[x].setAttribute("opacity", "0.3")
              colorselect[i].childNodes[x].classList.remove("js--activeColor")
            }
          }
        }
      })
    }
}
}
