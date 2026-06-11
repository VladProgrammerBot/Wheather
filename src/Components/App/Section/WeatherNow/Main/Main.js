import './Main.scss'

const Main = ({ WheatherNow, getColorByC }) => {
    return (
        <div className='leftWeatherForDaySide'>
            <div>
                <div className='MegaBigWord'>
                    <img className='MegaBigIMG' src={WheatherNow && WheatherNow.current.condition.icon} />
                </div>
                <div className="text">
                    {WheatherNow && WheatherNow.current.condition.text}
                </div>
            </div>
            <div
                style={{
                    color: `${WheatherNow && getColorByC(WheatherNow.current.temp_c)
                        }`
                }}
                className='MegaBigWord'
            >
                {WheatherNow && WheatherNow.current.temp_c}&deg;
            </div>
        </div>
    )
}

export default Main