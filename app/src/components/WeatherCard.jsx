import React from 'react'
import { useWeather } from '../context/WeatherContext'

function WeatherCard() {
  const { weather,loading,error } = useWeather()
  if (loading) {
  return (
    <p className='text-center text-white mt-6'>
      Loading weather...
    </p>
  )
}

if (error) {
  return (
    <p className='text-center text-red-400 mt-6'>
      {error}
    </p>
  )
}

if (!weather) {
  return (
    <p className='text-center text-slate-300 mt-6'>
      Search for a city
    </p>
  )
}


  return (
    <div className='mt-6 w-80 bg-slate-800 text-white rounded-2xl shadow-2xl p-6'>

      <h2 className='text-2xl font-bold text-center'>
        {weather.name}
      </h2>   

      <div className='text-5xl text-center mt-2'>
        {weather.weather[0].main === "Clear" && "☀️"}
        {weather.weather[0].main === "Clouds" && "☁️"}
        {weather.weather[0].main === "Rain" && "🌧️"}
        {weather.weather[0].main === "Snow" && "❄️"}
        {!["Clear","Clouds","Rain","Snow"].includes(weather.weather[0].main) && "🌤️"}
      </div>
 
      <h1 className='text-6xl font-bold text-center mt-2'>
        {Math.round(weather.main.temp)}°
      </h1>

      <p className='text-center text-slate-300 mt-1 text-lg'>
        {weather.weather[0].main}
      </p>

      <div className='border-t border-slate-600 my-4'></div>

      <div className='grid grid-cols-2 gap-3 text-sm'>

        <div className='bg-slate-700 p-3 rounded-xl'>
          <p className='text-slate-300'>Feels Like</p>
          <p className='font-semibold'>
            {Math.round(weather.main.feels_like)}°
          </p>
        </div>

        <div className='bg-slate-700 p-3 rounded-xl'>
          <p className='text-slate-300'>Humidity</p>
          <p className='font-semibold'>
            {weather.main.humidity}%
          </p>
        </div>

        <div className='bg-slate-700 p-3 rounded-xl'>
          <p className='text-slate-300'>Wind</p>
          <p className='font-semibold'>
            {weather.wind.speed} km/h
          </p>
        </div>

        <div className='bg-slate-700 p-3 rounded-xl'>
          <p className='text-slate-300'>Visibility</p>
          <p className='font-semibold'>
            {weather.visibility / 1000} km
          </p>
        </div>

      </div>

    </div>
  )
}

export default WeatherCard