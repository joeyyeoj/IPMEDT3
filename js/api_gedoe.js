
function getWeather(){
  fetch('http://api.openweathermap.org/data/2.5/weather?q=Mwanza&appid=08de7009baba056c89ab0323c94d73cd')
  .then(res => res.json())
  .then(data => { return data.weather[0].main });
}
