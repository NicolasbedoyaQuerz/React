import { useState } from "react";

const Message = () => {

    const [isVisible , setIsVisible] = useState(true)

  /* const cssObject = {
        display : isVisible ? 'block' : 'none'
    }*/

    return (
        <div>
            <h1 style={{ display : isVisible ? 'block' : 'none'}}>este mensaje es un texto que aparece y desaparece</h1>
            <button onClick={ () => setIsVisible(!isVisible)}>Aparece / Desaparece</button>
        </div>
    )
}

export default Message;