import { useEffect, useRef, useState } from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import './Slider.scss'

const Slider = ({ WheatherForWeek, getColorByC, dayWeatherDetail }) => {
    const SliderRef = useRef(null)
    const [SliderPosition, setSliderPosition] = useState(0)
    const maxSLiderPosition = (24 - 10)

    const MoveSliderTo = (Direct) => {
        for (let i = 0; i <= 3; i++) {
            if ((SliderPosition + Direct * i) < maxSLiderPosition && (SliderPosition + Direct * i) >= 0) {
                setSliderPosition(SliderPosition + Direct * i)
            }
        }
    }

    return (
        <div className="sliderContainer">
            <div className="sliderBtn" onClick={() => MoveSliderTo(-1)}>
                <FaCaretLeft />
            </div>
            <div className="SliderArea" ref={SliderRef}>
                <div className="Slider" style={{ transform: `translateX(${SliderPosition * -100}px)` }}>
                    {WheatherForWeek && WheatherForWeek.forecast.forecastday[dayWeatherDetail].hour.map((elem, index) => {
                        return (
                            <div className="hourLine" key={index}>
                                <div className="time">
                                    <div className="greyMiniWord">{index.toString().padStart(2, '0')}:00</div>
                                </div>
                                <div className="temp">
                                    <div className="tempItem" style={{ bottom: `${elem.temp_c + 25}%` }}>
                                        <div><img src={elem.condition.icon} /></div>
                                        <div style={{
                                            color: `${getColorByC(elem.temp_c)
                                                }`
                                        }} >{elem.temp_c}&deg;</div>
                                    </div>
                                    <div className="tempLine" style={{ height: `${elem.temp_c + 25}%`, backgroundColor: `${getColorByC(elem.temp_c)}`}}></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="sliderBtn" onClick={() => MoveSliderTo(+1)}>
                <FaCaretRight />
            </div>
        </div>
    )
}

export default Slider