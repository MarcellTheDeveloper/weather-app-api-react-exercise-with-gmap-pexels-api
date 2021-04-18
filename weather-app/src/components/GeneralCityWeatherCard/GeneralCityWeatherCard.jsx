import React from 'react';

const GeneralCityWeatherCard = ({ nameOf, temp, tempMin, tempMax, sky, icon }) => {
  return (
    <div className="card-container card-top">
      <p className="nameOf"><span>{nameOf}</span> időjárása</p>
      <h2 className="temp">{temp}°</h2>
      <p className="tempMinMax">{tempMin}°/{tempMax}°</p>
      {icon ? (<img className="grid-img" src={`http://openweathermap.org/img/w/${icon}.png`} alt='' />) : ('')}
      <p className="sky">{sky}</p>
    </div>
  );
};

export default GeneralCityWeatherCard;