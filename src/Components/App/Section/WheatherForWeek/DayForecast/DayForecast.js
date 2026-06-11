import './DayForecast.scss'

import { GiDrop } from "react-icons/gi";

const DayForecast = ({ index, day, getColorByC, setDayWeatherDetail, dayWeatherDetail }) => {
    const sunnyDay = day.hour[12]
    const nightDay = day.hour[0]
    const fulTimeOf12 = day.hour[12].time

    const GetNameOfNumOfDay = (Timestring) => {
        const fulDate = String(
            new Date(Timestring)
        ).split(' ')[0]

        return fulDate
    }
    
    return (
        <div 
            className={ `${ dayWeatherDetail === index && 'active' } DayForecast` } 
            onClick={() => setDayWeatherDetail(index)}
        >

            <div className="leftSide">

                <div id="f" className="miniWord">
                    {GetNameOfNumOfDay(fulTimeOf12)}
                </div>

                <div>
                    <img className='BigWord' src={sunnyDay.condition.icon} />
                </div>

                <div id="t">
                    <div style={{ color: `${getColorByC(sunnyDay.temp_c)}` }}>{sunnyDay.temp_c}&deg;c</div>
                </div>

                <div className="miniWord">
                    {sunnyDay.condition.text}
                </div>

            </div>
            <div className='rigthSide'>

                <div><GiDrop className="greyMiniWord" /></div>
                <div className="greyMiniWord">{nightDay.humidity}%</div>

            </div>

        </div>
    )
}

export default DayForecast