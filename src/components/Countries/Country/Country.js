import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props.country);
    //destructuring
    const {area, region, population, name, flags} =props.country;
    return (

      <div className='country'>
        <h2>Name:{name.common}</h2>
        <img src={flags.png} alt=""/>
        <h4>Population:{population}</h4>
        <p>Area: {area}</p>
        <p>Region:{region}</p>
      </div>
    )
  } 


export default Country;