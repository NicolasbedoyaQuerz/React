import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Country({ name }) {
  const [country, setCountry] = useState(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/name/${name}`)
      .then((response) => {
        setCountry(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  if (!visible) {
    return (
      <button onClick={() => setVisible(true)}>Mostrar País</button>
    );
  }

  if (!country) {
    return <p>Cargando...</p>;
  }

  const { name: officialName, flag, population, area, region, subregion, capital, continent } = country;

  return (
    <div className='country-card'>
            <h1>Información de Países</h1>
      <h2>{officialName}</h2>
      <img src={flag} alt={`${officialName} Flag`} width={200} />
      
      <section>
        <h3>Demography</h3>
        <ul>
          <li>Población: {population}</li>
          <li>Area: {area} km²</li>
        </ul>
      </section>
      
      <section>
        <h3>Location</h3>
        <ul>
          <li>Continente: {continent}</li>
          <li>Region: {region}</li>
          <li>Subregion: {subregion}</li>
        </ul>
      </section>
      
      <section>
        <h3>Capital</h3>
        <p>{capital}</p>
      </section>

      <button onClick={() => setVisible(false)}>Ocultar País</button>
    </div>
  );
}

export default Country;
