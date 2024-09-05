import React, { useState } from 'react'
import './weather.css'

const api = {
    key: '4908954104bc76f8715ef170ca6d13e1',
    body: 'https://api.openweathermap.org/data/2.5/'
}

export default function Weather() {
    const [input, setInput] = useState('');
    const [weatherData, setWeatherData] = useState(null)


    const search = (e)=>{
        if(e.key === 'Enter'){
            
            fetch(`${api.body}weather?q=${input}&units=metric&appid=${api.key}`)
            .then(response => response.json())
            .then(data => setWeatherData(data))
            .catch(err => console.error('Error fetching weather data:', err));
            }
    }

  return (
    <div className='wrapper'>
        <div className="search">
            <input type="text" 
            placeholder='Search a city'
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
            onKeyDown={search}/>
        </div>
        {weatherData?<div className={weatherData.main.temp<24 ? "display cold" : "display warm"}>
            <h2>{weatherData.name}, {weatherData.sys?.country}</h2>
            <div>{weatherData.weather[0].main}</div>
            <h1>{Math.round(weatherData.main.temp*10)/10}°C</h1>
            <h3>Humidity {weatherData.main.humidity}%</h3>
        </div>: <></>}
    </div>
  )
}
