import './WeatherDuringDay.scss'

import Slider from './Slider'
import WeatherDashBoard from '../../../Ui/Dashboards/WeatherDashBoard'

const WeatherDuringDay = ({ WheatherForWeek, getColorByC, dayWeatherDetail }) => {
    return (
        <WeatherDashBoard
            leftBottomText='Weather during day'
            rightText={WheatherForWeek && WheatherForWeek.forecast.forecastday[dayWeatherDetail].date}
        >
            <div className="weatherContent">
                <Slider WheatherForWeek={WheatherForWeek} getColorByC={getColorByC} dayWeatherDetail={dayWeatherDetail} />
            </div>
        </WeatherDashBoard>
    )
}

export default WeatherDuringDay