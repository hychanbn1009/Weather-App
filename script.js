api_key='0f4cfc1673ca8fbe1c82881b21b24159'
// city='London'
api_link=`api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}`


// const cityName = document.getElementById('cityName');
async function getWeather(city){
    displaycityName.innerHTML='loading...'
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f4cfc1673ca8fbe1c82881b21b24159`, {mode: 'cors'})
  const tempData = await response.json().then(response=>{
    if(response.cod===200){
    console.log(response)
    const location =`you are in ${response.name}`
    const maxTemp = `max temp is ${response.main.temp_max}`
    const minTemp = `min temp is ${response.main.temp_min}`
    const feelTemp = `your feeling temp is ${response.main.temp}`
    const humidity = `humidity is ${response.main.humidity}`
    displaycityName.innerHTML=location
    displaymaxTemp.innerHTML=maxTemp
    displayminTemp.innerHTML=minTemp
    displayfeelTemp.innerHTML=feelTemp
    displayHumidity.innerHTML=humidity
    }else{
        displaycityName.innerHTML='We cant find that place!'
    }
  })
}

function Submit_CityName(){
    const city=document.getElementById('cityName').value
    displaycityName.innerHTML=''
    displaymaxTemp.innerHTML=''
    displayminTemp.innerHTML=''
    displayfeelTemp.innerHTML=''
    displayHumidity.innerHTML=''
    getWeather(city)
}
