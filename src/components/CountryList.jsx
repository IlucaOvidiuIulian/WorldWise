import React from 'react';
import Spinner from "./Spinner"
import styles from './CountryList.module.css'
import CityItem from './CityItem';
import Message from "./Message"
function CountriesList({cities, isLoading}) {

    if(isLoading) return <Spinner/>
    if(!cities.length) return <Message message={"Add your first city by clicking on a city on the map"}/>
  return (
    <ul className={styles.countriesList}>
        {cities.map((city)=>{return <CityItem city={city} key={city.id}/>})}
    </ul>
  );
} 

export default CountriesList;