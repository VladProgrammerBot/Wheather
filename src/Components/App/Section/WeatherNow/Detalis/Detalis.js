import './Detalis.scss'

import { FaWind } from "react-icons/fa";
import { GiDrop } from "react-icons/gi";
import { WiCloudyGusts } from "react-icons/wi";
import { FaTemperatureEmpty } from "react-icons/fa6";

const Detalis = ({ getColorByC, WheatherNow }) => {
    return (
        <div className='rightWeatherForDaySide'>
            {[
                {
                    value: 'feelslike_c',
                    name: 'Feel',
                    icon: <FaTemperatureEmpty color="red" />,
                    units: `\u00B0C`,
                    styles: { color: `${WheatherNow && getColorByC(WheatherNow.current.temp_c)}` }
                },
                {
                    value: 'wind_kph',
                    name: 'Wind',
                    icon: <FaWind color="cornflowerblue" />,
                    units: 'km/h',
                    styles: { color: 'cornflowerblue', }
                },
                {
                    value: 'gust_kph',
                    name: 'Wind Gusts',
                    icon: <WiCloudyGusts color="cornflowerblue" />,
                    units: 'km/h',
                    styles: { color: 'cornflowerblue' }
                },
                {
                    value: 'humidity',
                    name: 'humidity',
                    icon: <GiDrop color="blue" />,
                    units: '%',
                    styles: { color: 'blue' }
                }
            ].map(({ name, value, icon, units, styles }, index) => {
                return (
                    <div key={index} style={styles}>
                        <div className="WeatherItemName">{icon} {name}</div>
                        <div  >{WheatherNow && WheatherNow?.current?.[value]} {units}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Detalis