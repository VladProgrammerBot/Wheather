import './Section.scss'

import WeatherDuringDay from '../Section/WeatherDuringDay'
import WeekWeatherFuter from '../Section/WheatherForWeek'
import WeatherNow from '../Section/WeatherNow'

const Section = ({
    WheatherNow,
    timeNow,
    VeryfiCity,
    WheatherForWeek,
    dayWeatherDetail,
    setDayWeatherDetail
}) => {
    const getColorByC = (temp) => {
        if (temp >= 30) {
            return 'red'
        }
        if (temp >= 20) {
            return 'orange'
        }
        if (temp >= 10) {
            return 'green'
        }
        return 'blue'
    }

    return (
        <div className='SectionContent'>
            <WeatherNow WheatherNow={WheatherNow} timeNow={timeNow} getColorByC={getColorByC} VeryfiCity={VeryfiCity} />
            <WeatherDuringDay WheatherForWeek={WheatherForWeek} getColorByC={getColorByC} dayWeatherDetail={dayWeatherDetail} />
            <WeekWeatherFuter WheatherForWeek={WheatherForWeek} getColorByC={getColorByC} setDayWeatherDetail={setDayWeatherDetail} dayWeatherDetail={dayWeatherDetail} />
        </div>
    )
}

export default Section