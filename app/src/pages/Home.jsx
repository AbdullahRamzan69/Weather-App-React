import React, { useState } from 'react'
import { useWeather } from '../context/WeatherContext'
import Navbar from '../components/Navbar'
import WeatherCard from '../components/WeatherCard'

function Home() {
  

  const [city, setCity] = useState("")
  const { fetchWeather,fetchUserLocation } = useWeather()

  return (
    <div className='min-h-screen bg-slate-900'>

      <Navbar />

      <div className='flex justify-center items-center pt-10'>

        <div className='w-100 p-3 rounded-2xl shadow-2xl bg-slate-800 text-white'>

          <div className='flex gap-2'>

            <input
              className='p-2 rounded-2xl w-full bg-slate-800 text-white'
              type="text"
              placeholder='Enter city name'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <button
              className='py-2.5 px-2.5 bg-blue-500 rounded-2xl  '
              onClick={() => fetchWeather(city)}
            >
              Search
            </button>

            <button
            className='py-2.5 px-2.5 bg-blue-500 rounded-2xl'
            onClick={fetchUserLocation}
            >
              Use my loaction
            </button>

          </div>

        </div>

      </div>
       <div className='flex justify-center'>
      <WeatherCard/>
       </div>
    </div>
  )
}

export default Home  