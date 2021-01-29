function getWeather(){
  console.log("getweather draait")
  fetch('http://api.openweathermap.org/data/2.5/weather?q=Zanzibar&appid=08de7009baba056c89ab0323c94d73cd')
  .then(res => res.json())
  .then(data => {
    if(data.weather[0].main == "Rain"){
      const weatherPlayer = document.getElementById("js--weatherPlayer")
      weatherPlayer.setAttribute("sound", "src: #regen.mp3; positional: false; loop: true; volume: 0.03; on: sound-loaded")
      weatherPlayer.components.sound.playSound();
      console.log("Het regent")
    }
    else if(data.weather[0].main == "Drizzle"){
      const weatherPlayer = document.getElementById("js--weatherPlayer")
      weatherPlayer.setAttribute("sound", "src: #regen.mp3; positional: false; loop: true; volume: 0.03; on: sound-loaded")
      weatherPlayer.components.sound.playSound();
      console.log("Het regent")
    }
    else{
      const weatherPlayer = document.getElementById("js--weatherPlayer")
      weatherPlayer.setAttribute("sound", "src: #droog.mp3; positional: false; loop: true; volume: 0.01; on: sound-loaded")
      weatherPlayer.components.sound.playSound();
      console.log("het regent niet")
    }
  })
}
