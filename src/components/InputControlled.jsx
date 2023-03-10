import { useState } from "react"


const inputControlled = () => {
    
    const [value, setValue] = useState('escribe aqui')

    return (
        <div>
            <input 
            type="text"
            value= {value}
            onChange={(e) => setValue(e.target.value) }
            />
        </div>
    )
}

export default inputControlled