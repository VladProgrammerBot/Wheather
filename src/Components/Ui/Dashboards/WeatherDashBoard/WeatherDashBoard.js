import './WeatherDashBoard.scss'

const WeatherDashBoard = ({ rightText, leftTopText, leftBottomText, children }) => {
    return (
        <div className='WeatherDashBoard'>
            <DashBoardHeader
                rightText={rightText}
                leftTopText={leftTopText}
                leftBottomText={leftBottomText}
            />
            <div className='content'>
                {children}
            </div>
        </div>
    )
}

const DashBoardHeader = ({ rightText, leftTopText, leftBottomText }) => {
    return (
        <div className='DashBoardHeader'>
            <div className='headSide'>
                <div>
                    {leftTopText}
                </div>
                <div className="greyMiniWord">
                    {leftBottomText}
                </div>
            </div>
            <div className='headSide'>
                <div className="greyColor">
                    {rightText}
                </div>
            </div>
        </div>
    )
}

export default WeatherDashBoard