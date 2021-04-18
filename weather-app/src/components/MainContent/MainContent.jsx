import React from 'react';
import GeneralCityWeatherCard from '../GeneralCityWeatherCard/GeneralCityWeatherCard';
import CityWeatherCard from '../CityWeatherCard/CityWeatherCard';
import { v4 as uuidv4 } from 'uuid';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import cities from '../../data/current.city.list.json';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import Pexels from '../Pexels/Pexels';

export default function MainContent(props) {
  const { name, data, handleOnSelect, handleOnFocus } = props;
  return (
    <>
      <div className='display-container'>
        <div className='search-panel'>
          <ReactSearchAutocomplete
            items={cities}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
        </div>
        {data ? <GeneralCityWeatherCard key={uuidv4()} {...data} /> : ''}
        {data ? <CityWeatherCard key={uuidv4()} {...data} /> : ''}
        {data ? <GoogleMaps key={uuidv4()} location={data.loc} /> : ''}
      </div>
      {data ? <Pexels key={uuidv4()} city={name} /> : ''}
    </>
  );
}
