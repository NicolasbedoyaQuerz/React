import React, { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserAgeChange = (event) => {
    setUserAge(event.target.value);
  };

  const handleUserEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handleTermsAcceptedChange = (event) => {
    setIsTermsAccepted(event.target.checked);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleSubmit = e => {
    
    e.preventDefault()

    const data = {
        name : userName,
        age : Number(userAge),
        email : userEmail,
        terms : isTermsAccepted,
        genero : selectedGender,
        id : Date.now()
    }
    console.log(data);

    reset()
  }; 

  const reset = () => {
    setUserName('')
    setUserAge('')
    setUserEmail('')
    setIsTermsAccepted(false)
     setSelectedGender('')
  }

  return (
    <form onSubmit={ e => handleSubmit(e)}>
      <div>
        <label htmlFor="user-name">Nombre</label>
        <input
          name="userName"
          id="user-name"
          type="text"
          value={userName}
          onChange={handleUserNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="user-age">Edad</label>
        <input
          name="userAge"
          id="user-age"
          type="number"
          value={userAge}
          onChange={handleUserAgeChange}
          required
        />
      </div>
      <div>
        <label htmlFor="user-email">Correo Electronico</label>
        <input
          name="userEmail"
          id="user-email"
          type="email"
          value={userEmail}
          onChange={handleUserEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="terms">Aceptar Terminos y Condiciones</label>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={isTermsAccepted}
          onChange={handleTermsAcceptedChange}
          required
        />
      </div>
      <div>
        <strong>Genero</strong>
        <label htmlFor="male">Masculino</label>
        <input
          type="radio"
          name="genero"
          id="male"
          value="male"
          checked={selectedGender === "male"}
          onChange={handleGenderChange}
          required
        />
        <label htmlFor="fem">Femenino</label>
        <input
          type="radio"
          name="genero"
          id="fem"
          value="female"
          checked={selectedGender === "female"}
          onChange={handleGenderChange}
          required
        />
        <label htmlFor="other">Otro</label>
        <input
          type="radio"
          name="genero"
          id="other"
          value="other"
          checked={selectedGender === "other"}
          onChange={handleGenderChange}
          required
          min='18'
          max= '99'
        />
      </div>

      <button type="submit">Enviar Formulario</button>
    </form>
  );
};

export default Form;
