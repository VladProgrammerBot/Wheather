import './WeatherNow.scss'

import WeatherDashBoard from '../../../Ui/Dashboards/WeatherDashBoard'
import Detalis from './Detalis'
import Main from './Main'

const WeatherNow = ({ WheatherNow, timeNow, getColorByC, VeryfiCity }) => {
    return (
        <WeatherDashBoard
            leftTopText={VeryfiCity}
            leftBottomText='Weather now'
            rightText={timeNow}
        >
            <div className="WeatherNow">
                <Main
                    WheatherNow={WheatherNow}
                    getColorByC={getColorByC}
                />
                <Detalis
                    WheatherNow={WheatherNow}
                    getColorByC={getColorByC}
                />
            </div>
        </WeatherDashBoard>
    )
}

export default WeatherNow