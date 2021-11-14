api_key='0f4cfc1673ca8fbe1c82881b21b24159'
// city='London'
api_link=`api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}`


// const cityName = document.getElementById('cityName');
async function getWeather(city){
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f4cfc1673ca8fbe1c82881b21b24159`, {mode: 'cors'})
  const tempData = await response.json().then(response=>{
    if(response.cod===200){
    console.log(response)
    console.log(`you are in ${response.name}`)
    console.log(`max temp is ${response.main.temp_max}`)
    console.log(`min temp is ${response.main.temp_min}`)
    console.log(`your feeling temp is ${response.main.temp}`)
    console.log(`humidity is ${response.main.humidity}`)
    cityName.innerHTML=response.name
    }else{
        console.log('We cant find that place!')
    }
  })
}

function Submit_CityName(){
    const city=document.getElementById('cityName').value
    getWeather(city)
}
