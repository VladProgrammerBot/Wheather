import './TextInput.scss'
import { CiSearch } from "react-icons/ci";

const TextInput = ({ action, value }) => {
    return (
        <div className='inputCont'>
            <CiSearch/>
            <input type='text' value={value} placeholder='enter your city' onChange={(e) => action(e.target.value)}/>
        </div>
    )
}

export default TextInput