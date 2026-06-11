import './Header.scss'
import TextInput from '../../Ui/Elements/TextInput'

const Header = ({ setCity, city }) => {
    return (
        <div className='header'>
            <div>
                <div>
                    Wheather
                </div>
            </div>
            <TextInput action={setCity} value={city} />
        </div>
    )
}

export default Header