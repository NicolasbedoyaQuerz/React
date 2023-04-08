import { useState } from "react";



const RepasoForm = () => {

    const [ valueName, setValueName] = useState('')
    const [ valueAge, setValueAge] = useState('')
    const [ valueEmail, setValueEmail] = useState('')
    const [ isTermsAccepted, setIsTermsAccepted] = useState(false)
    const [ genreValue, setGenreValue] = useState('')

    const handleSubmit = e => {
        const data = {
            name : valueName,
            age : Number(valueAge),
            email : valueEmail,
            terms : isTermsAccepted,
            genre : genreValue

        }
        console.log(data);
        reset()
        e.preventDefault()
    }

    const reset = () => {
        setValueName('')
        setValueAge('')
        setValueEmail('')
        setIsTermsAccepted(false)
        setGenreValue('')

        alert('Formulario enviado')
    }

    return (
        <form onSubmit={ e => handleSubmit(e)}>
        <div>
            <label htmlFor="user-name"> Nombre </label>
            <input 
            type="text" 
            name="userName" 
            id="user-name" 
            value={valueName}
            onChange={ e => setValueName(e.target.value)}
            />
        </div>
        <div>
               <label htmlFor="user-age"> Age </label>
            <input 
            type="number" 
            name="userAge" 
            id="user-age" 
            value={valueAge}
            onChange={ e => setValueAge(e.target.value)}
            />
        </div>
        <div>
               <label htmlFor="user-email"> Email </label>
            <input 
            type="email" 
            name="userEmail" 
            id="user-email" 
            value={valueEmail}
            onChange={ e => setValueEmail(e.target.value)}
            />
        </div>
               <label htmlFor="terms"> Aceptar Terminos y Condiciones</label>
            <input 
            type="checkbox" 
            name="terms" 
            id="terms"
            checked={isTermsAccepted}
            onChange={ e => setIsTermsAccepted(e.target.checked)} 
            />
        <div>
        <div>
               <label htmlFor="male"> Maculino </label>
            <input 
            type="radio" 
            name="genre" 
            id="male" 
            checked = {genreValue === 'hombre'}
            onChange={() => setGenreValue('hombre')}
            />
       
                <label htmlFor="fem"> Femenino </label>
            <input 
            type="radio" 
            name="genre" 
            id="fem" 
            checked = {genreValue === 'mujer'}
            onChange={() => setGenreValue('mujer')}
            />
       
              <label htmlFor="other"> Other </label>
            <input 
            type="radio" 
            name="genre" 
            id="other" 
            checked = {genreValue === 'no binario'}
            onChange={() => setGenreValue('no binario')}
            />
        </div>
    
            <button type="submit"> Enviar Formulario </button>
        </div>
        </form>
    );
};

export default RepasoForm;