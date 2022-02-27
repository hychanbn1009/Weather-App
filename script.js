api_key='0f4cfc1673ca8fbe1c82881b21b24159'
// city='London'
api_link=`api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}`

// const cityName = document.getElementById('cityName');
async function getWeather(city,unit){
  displaycityName.innerHTML='loading...'
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f4cfc1673ca8fbe1c82881b21b24159`, {mode: 'cors'})
  const tempData = await response.json().then(response=>{
    if(response.cod===200){
    console.log(response)
    setVariable(response,unit)
    return response
    }else{
        displaycityName.innerHTML='We cant find that place!'
    }
  })
}

function setVariable(Weather,unit){
  let location =Weather.name
  let weather_description=Weather.weather[0].description
  let weather_icon=`https://openweathermap.org/img/wn/${Weather.weather[0].icon}@2x.png`
  let country = Weather.sys.country
  let sun_rise = Weather.sys.sun_rise
  let sun_set = Weather.sys.sunset
  let maxTemp = Weather.main.temp_max
  let minTemp = Weather.main.temp_min
  let feelTemp = Weather.main.temp
  let humidity = Weather.main.humidity
  let wind_speed = Weather.wind.speed
  let record_time = Weather.dt
  display(location,maxTemp,minTemp,feelTemp,humidity,country,weather_icon,weather_description,wind_speed,unit)
}

function changeUnit(unit,temperature){
  if(unit){
    temperature=`${(temperature-272.15).toFixed(1)}°C`
    return(temperature)
  }else{
    temperature=`${(1.8*(temperature-273)+32).toFixed(1)}°F`
    return(temperature)
  }
}

function Submit_CityName(){
  const city=document.getElementById('cityName').value
  const unit=document.getElementById('togBtn').checked
  clear()
  getWeather(city,unit)
}

function updateUnit(){
  const city=document.getElementById('cityName').value
  const unit=document.getElementById('togBtn').checked
  getWeather(city,unit)
}

function clear(){
  displaycityName.innerHTML=''
  displayWeatherIcon.src=''
  displayWeatherDescription.innerHTML=''
  displaymaxTemp.innerHTML=''
  displayminTemp.innerHTML=''
  displayfeelTemp.innerHTML=''
  displayHumidity.innerHTML=''
}

function display(location,maxTemp,minTemp,feelTemp,humidity,country,weather_icon,weather_description,wind_speed,unit){
  displaycityName.innerHTML=`${location},${country}`
  displayWeatherIcon.src=`${weather_icon.toString()}`
  displayWeatherDescription.innerHTML=`${weather_description}`
  displayfeelTemp.innerHTML=`Feels like ${changeUnit(unit,feelTemp)}`
  displaymaxTemp.innerHTML=`<i class="fas fa-fire-alt"></i>Max temp: ${changeUnit(unit,maxTemp)}`
  displayminTemp.innerHTML=`<i class="fas fa-snowflake"></i>Min temp: ${changeUnit(unit,minTemp)}`
  displayHumidity.innerHTML=`<i class="fas fa-water"></i>Humidity: ${humidity}%`
  dispalyWindSpeed.innerHTML=`<i class="fas fa-wind"></i>Wind Speed: ${wind_speed} meter/sec`
}
