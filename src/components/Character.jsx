import { useState } from "react";

const Character = ({data}) => {

  const [isDecimeters, setIsDecimeters] = useState(true)

 
  
  return (
    <div className="character-card">
      <h1>{data.forms?.[0].name}</h1>
      <img src={data.sprites?.front_default} alt="" />
      <h3><span>Weight:</span> {data.weight} </h3>
      <h3><span>Height:</span> {data.height} </h3>
      <h3><span>Type:</span> {data.types?.[0].type?.name}</h3>
      <h3><span>Altura:</span> { isDecimeters ? `${data.height} ` : data.height / 10  } { isDecimeters ? 'decimeters' : 'metros'}</h3>
      
      <button onClick={() => setIsDecimeters(!isDecimeters)}>Cambiar altura</button>
    </div>
  );
};

export default Character;