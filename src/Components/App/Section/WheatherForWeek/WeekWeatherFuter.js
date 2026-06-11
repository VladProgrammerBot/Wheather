import React from "react";

import DayForecast from './DayForecast'
import WeatherDashBoard from '../../../Ui/Dashboards/WeatherDashBoard'

const WeekWeatherFuter = ({ WheatherForWeek, getColorByC, setDayWeatherDetail, dayWeatherDetail }) => {
    return (
        <WeatherDashBoard
            leftBottomText={'7-days Wheather'}
        >
            <div className="WeekWeatherFuter">
                {WheatherForWeek && WheatherForWeek.forecast.forecastday.map((day, index) => {
                    return (
                        <DayForecast
                            key={index}
                            index={index}
                            day={day}
                            getColorByC={getColorByC}
                            setDayWeatherDetail={setDayWeatherDetail}
                            dayWeatherDetail={dayWeatherDetail}
                        />
                    )
                })}
            </div>
        </WeatherDashBoard>
    )
}

export default React.memo(WeekWeatherFuter)