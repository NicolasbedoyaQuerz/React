import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const Home = () => {
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(password === '1234'){
            navigate('/Proyectos')
        }else{
            alert('contraseña incorrecta')
        }
    }

    const handleChange = (event) =>{
        setPassword(event.target.value)
    }

    return (
        <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
         </form>
       
            <h1> home! bienvenido a Mi Portafolio</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit culpa perspiciatis doloribus vero maiores sunt quam sed iure, consequuntur, numquam placeat cum possimus fugit est repudiandae quae quod mollitia veritatis?</p>
            <Link to = '/Proyectos'> ir a mis Proyectos</Link>
            {/* <button onClick={redirect}> Llevar hacias Seccion Tecnologias </button> */}

        </div>
      
    );
};

export default Home;