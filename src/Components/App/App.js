import './App.scss'
import { useEffect, useState } from 'react'
import Header from './Header'
import Section from './Section'
const apiKey = "161a23d9093a48e38c192128241608"

const App = () => {
  const [WheatherNow, setWheatherNow] = useState(null)
  const [WheatherForWeek, setWheatherForWeek] = useState(null)
  const [timeNow, setTimeNow] = useState()
  const [dayWeatherDetail, setDayWeatherDetail] = useState(0)
  const [city, setCity] = useState('Ternopil')
  const [VeryfiCity, setVeryfiCity] = useState(city)

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${city}/`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0] !== undefined && data[0].name === city) {
          setVeryfiCity(city)
          getAndSetDate(city)
        }
      })
  }, [city])

  const SetTimeInterval = () => {
    setInterval(() => {
      const time = new Date()
      setTimeNow(`
        ${time.getHours().toString().padStart(2, '0')
        }:${time.getMinutes().toString().padStart(2, '0')
        }:${time.getSeconds().toString().padStart(2, '0')
        }`)
    }, 1000);
  }

  const getAndSetDate = (VeryfiCity) => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${VeryfiCity}&aqi=yes/`)
      .then((res) => res.json())
      .then((data) => {
        setWheatherNow(data)
      })
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${VeryfiCity}&days=7&aqi=yes&alerts=yes/`)
      .then((res) => res.json())
      .then((data) => {
        setWheatherForWeek(data)
      })
  }

  useEffect(() => {
    getAndSetDate(VeryfiCity)
    SetTimeInterval()
  }, [])

  return (
    <div className="App">
      <Header city={city} setCity={setCity}/>
      <Section
        WheatherNow={WheatherNow}
        timeNow={timeNow}
        VeryfiCity={VeryfiCity}
        WheatherForWeek={WheatherForWeek}
        dayWeatherDetail={dayWeatherDetail}
        setDayWeatherDetail={setDayWeatherDetail}
      />
    </div>
  )
}

export default App;
