import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Country/Country';
import Person from './components/Person/Person';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
        {/* <LoadCountries></LoadCountries> */}
        
        <Countries></Countries>
        <Header></Header>
        <Person></Person>

    </div>
  );
}
/* function LoadCountries(){
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
      <h1>Visting Every Country of The world !!</h1>
      <h3>Available Countries: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props){
  return (
    <div>
      <h2>Name:{props.name}</h2>
      <h4>Population:{props.population}</h4>
    </div>
  )
} */

export default App;
