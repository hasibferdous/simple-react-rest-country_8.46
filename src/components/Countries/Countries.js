import React, { useEffect, useState } from 'react';
import Country from './Country/Country';
const Countries = () => {

  //1. declaring state to save loaded data
  const [countries, setCountries] = useState([]);
  //2. writing useEffect()
  useEffect( () =>{
  //3. writing fetch() inside useEffect() & setting loaded data
  fetch('https://restcountries.com/v3.1/all')
  .then(res =>res.json())
  .then(data => setCountries(data))

  } , [])

    return (
        <div>
            <h2>Hello from Countries !</h2>
            <h3>Available Countries: {countries.length}</h3>
      {
        countries.map(country => <Country 
          country={country}
          // name={country.name.common} 
          // area={country.area} 
          // population={country.population}>
          ></Country>)
      }
        </div>
    );
};

export default Countries;