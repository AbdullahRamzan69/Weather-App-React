import React from 'react'
import { useWeather } from '../context/WeatherContext'
import logo from "../assets/logo.png"
function Navbar() {

  const { darkMode, toggleTheme } = useWeather()

  return (
    <nav className='flex justify-between items-center px-6 py-4 bg-slate-800 text-white'>

      <div className='flex items-center gap-2'>
        <img
          src={logo}
          alt="logo"
          className='w-12 h-11 object-fill'
        />

        <h1 className='text-xl font-semibold'>
          Abdullah's Weather App
        </h1>
      </div>

      <button
        onClick={toggleTheme}
        className='px-4 py-2 bg-blue-500 rounded-xl'
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

    </nav>
  )
}

export default Navbar