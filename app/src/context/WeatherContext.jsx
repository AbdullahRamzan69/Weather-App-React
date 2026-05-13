import { useContext, useState ,createContext, useEffect, useCallback} from "react"
//8e4de7ccc613fd5e5800a2919df75d61
const WeatherContext = createContext()

export const useWeather = ()=> useContext(WeatherContext)

export function WeatherProvider({children}){

    //states

    const [darkMode,setDarkMode] = useState(false)
    const [weather,setWeather] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [city,setCity] = useState("")


    //theme

    const toggleTheme = ()=>{
        setDarkMode(prev => !prev)
    }
    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme")

        if(savedTheme==="dark"){
            setDarkMode(true)
        }
    },[])

    useEffect(()=>{
        if(darkMode){
            localStorage.setItem("theme","dark")
        } else{
            localStorage.setItem("theme","light")
        }
    },[darkMode])

    // Api handling


    const apiKey = "8e4de7ccc613fd5e5800a2919df75d61"

   const fetchWeather = useCallback(async (city) => {
  try {
    setLoading(true)
    setError(null)

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )

    const data = await res.json()

    if (data.cod !== 200) {
      throw new Error("city not found")
    }

    setWeather(data)

  } catch (error) {
    setError(error.message)
  } finally {
    setLoading(false)
  }
}, [])

// show weather data using users location

const fetchUserLocation = useCallback(() => {
  if (!navigator.geolocation) {
    setError("Location not found")
    return
  }

  navigator.geolocation.getCurrentPosition( 
    async (position) => {
      try {
        setLoading(true)
        setError(null)

        const { latitude, longitude } = position.coords

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        )

        const data = await res.json()

        if (data.cod !== 200) {
          throw new Error("Location weather not found")
        }

        setWeather(data)

      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    },

    (error) => {
      setError(error.message)
    }
  )
}, [])

// ***************************************************************************************************************
        return(
            <WeatherContext.Provider value={{darkMode,toggleTheme,weather,loading,error,fetchWeather,fetchUserLocation,city,setCity}}>
                {children}
            </WeatherContext.Provider>
        )  
}

