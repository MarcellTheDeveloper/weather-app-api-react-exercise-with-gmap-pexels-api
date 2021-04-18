import React from 'react';

const CityWeatherCard = ({ nameOf, hum, pres, tempMin, tempMax, feel }) => {
  return (
    <div className="card-container card-bottom">
      <p className="nameOf">Ma ilyen az időjárás <span>{nameOf}</span> területén</p>
      <div className="feel">
        <h2>{feel}°</h2>
        <p>Hőérzet</p>
      </div>
      <div className="container">
        <div className="tempMinMax">
          <p>Min/max</p>
          <p>{tempMin}°/{tempMax}°</p>
        </div>
        <div className="hum">
          <p>Páratart</p>
          <p>{hum}%</p>
        </div>
        <div className="pres">
          <p>Légnyomás</p>
          <p>{pres} <span>mbar</span></p>
        </div>
      </div>
    </div>
  );
};

export default CityWeatherCard;
