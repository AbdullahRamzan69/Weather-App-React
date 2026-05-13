import { useWeather } from './context/WeatherContext'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
function App() {
const {darkMode,toggleTheme} = useWeather()
  return (
    <>
   
    
    <Home/> 
    
    </>
  )
}

export default App
