import {useState} from 'react'
const Bulb = () => {

    const [ isOn, setIsOn ] = useState(false)

    return (
        <div>
            <div 
            className="lightbulb"
            style={{ backgroundColor : isOn ? "yellow" : "grey"   }}
            ></div>

            <button onClick={ () => setIsOn(!isOn) }>on/off</button>
        </div>
    );
}

export default Bulb;

