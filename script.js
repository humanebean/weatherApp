

function createDivWithText(text,cls) {
    let newDiv = document.createElement('div');
      newDiv.textContent = text;
      newDiv.classList.add(cls);
      weatherStuff.appendChild(newDiv);
  }
  function createDivWithImg(src) {
      let newImg=document.createElement("img");
      newImg.src=src;
      weatherStuff.appendChild(newImg);
  }
  

async function getWeatherData(target){
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=f2fecc8a07584e8c9e8224802240304&q='+target+'&days=3&aqi=no&alerts=no', {mode: 'cors'});
    const weatherData = await response.json()
    return weatherData
    console.log(weatherData.location)
}
weatherStuff = document.getElementById("weatherStuff");
weatherForm =document.getElementById("weatherForm");
submitButton=document.getElementById("submitButton");
submitButton.addEventListener('click',async (event)=>{
    event.preventDefault();
    weatherStuff.innerHTML="";
    formInput = document.getElementById("weatherTarget").value;
    let weatherData = await getWeatherData(formInput);
    console.log(weatherData)
    createDivWithText(weatherData.location.name, "zero")
    createDivWithText(weatherData.forecast.forecastday[0].date,"zero")
    createDivWithText(weatherData.forecast.forecastday[0].day.avgtemp_f,"zero")
    createDivWithText(weatherData.forecast.forecastday[0].day.condition.text,"zero")
    createDivWithImg(weatherData.forecast.forecastday[0].day.condition.icon,"zero")
    createDivWithText(weatherData.forecast.forecastday[1].date,"one")
    createDivWithText(weatherData.forecast.forecastday[1].day.avgtemp_f,"one")
    createDivWithText(weatherData.forecast.forecastday[1].day.condition.text,"one")
    createDivWithImg(weatherData.forecast.forecastday[1].day.condition.icon,"one")
    createDivWithText(weatherData.forecast.forecastday[2].date,"two")
    createDivWithText(weatherData.forecast.forecastday[2].day.avgtemp_f,"two")
    createDivWithText(weatherData.forecast.forecastday[2].day.condition.text,"two")
    createDivWithImg(weatherData.forecast.forecastday[2].day.condition.icon,"two")
})
