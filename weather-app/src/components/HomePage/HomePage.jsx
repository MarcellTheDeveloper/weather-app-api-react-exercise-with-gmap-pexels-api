import React, { useState, useEffect } from 'react';
import MainContent from '../MainContent/MainContent';
import { v4 as uuidv4 } from 'uuid';
import Header from '../Header/Header';
import Background from '../Background/Background';

const HomePage = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState('');

  const spinner = document.getElementById('load-animation');
  const rootE = document.getElementById('root');

  useEffect(() => {
    if (name) {
      spinner.style.display = 'flex';
      rootE.style.opacity = '0.5';

      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=2fe718525b16b5eab66f09e093430d6d`)
        .then((response) => response.json())
        .then((data) => {
          spinner.style.display = 'none';
          rootE.style.opacity = '1';

          setData({
            nameOf: name,
            country: data.sys.country,
            hum: data.main.humidity,
            pres: data.main.pressure,
            temp: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            feel: data.main.feels_like,
            sky: data.weather[0].description,
            icon: data.weather[0].icon,
            loc: { lat: data.coord.lat, lng: data.coord.lon },
          });
        });
    }
  }, [name]);

  const handleOnSelect = (item) => {
    // the item selected
    setName(item.name);
  };

  const handleOnFocus = () => { };

  return (
    <div className='home-page'>
      <Background />
      <Header name={name} icon={data.icon} country={data.country} />
      <div id="load-animation" style={{ display: 'none' }}></div>
      <MainContent key={uuidv4()} name={name} data={data} handleOnSelect={handleOnSelect} handleOnFocus={handleOnFocus} />
    </div>
  );
};

export default HomePage;
