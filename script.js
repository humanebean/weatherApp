

function createDivWithText(text) {
    let newDiv = document.createElement('div');
      newDiv.textContent = text;
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
weatherStuff = document.getElementById("weatherStuff")
weatherForm =document.getElementById("weatherForm")
weatherForm.addEventListener('click',async (event)=>{
    event.preventDefault();
    formInput = document.getElementById("weatherTarget").value;
    let weatherData = await getWeatherData(formInput);
    console.log(weatherData)
    createDivWithText(weatherData.location.name)
    createDivWithText(weatherData.forecast.forecastday[0].date)
    createDivWithText(weatherData.forecast.forecastday[0].day.avgtemp_f)
    createDivWithText(weatherData.forecast.forecastday[0].day.condition.text)
    createDivWithImg(weatherData.forecast.forecastday[0].day.condition.icon)
    createDivWithText(weatherData.forecast.forecastday[1].date)
    createDivWithText(weatherData.forecast.forecastday[1].day.avgtemp_f)
    createDivWithText(weatherData.forecast.forecastday[1].day.condition.text)
    createDivWithImg(weatherData.forecast.forecastday[1].day.condition.icon)
    createDivWithText(weatherData.forecast.forecastday[2].date)
    createDivWithText(weatherData.forecast.forecastday[2].day.avgtemp_f)
    createDivWithText(weatherData.forecast.forecastday[2].day.condition.text)
    createDivWithImg(weatherData.forecast.forecastday[2].day.condition.icon)
})
