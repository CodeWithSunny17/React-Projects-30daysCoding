import React, { useState } from 'react'
import './weather.css'

const api = {
    key: '4908954104bc76f8715ef170ca6d13e1',
    body: 'https://api.openweathermap.org/data/2.5/'
}

export default function Weather() {
    const [input, setInput] = useState('');
    const [weatherData, setWeatherData] = useState([])

    const search = (e)=>{
        if(e.key === 'Enter'){
            
            fetch(`${api.body}weather?q=${input}&appid=${api.key}`).then(response => response.json()).then(data => setWeatherData(data));
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
        <div className="display">
            <div>{weatherData.name}, {console.log(weatherData)}</div>
        </div>
    </div>
  )
}
