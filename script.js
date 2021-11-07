api_key='0f4cfc1673ca8fbe1c82881b21b24159'
city='London'
api_link=`api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}`


const cityName = document.querySelector('cityName');
async function getWeather(){
  const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=0f4cfc1673ca8fbe1c82881b21b24159', {mode: 'cors'})
  console.log(response)
  const tempData = await response.json()
  console.log(tempData)
}
getWeather()