import React from 'react';

let time = new Date().toDateString();

function Header(props) {
  return (
    <header>
      <div className='top'>
        <p>{time},</p>
        <p>{props.country}</p>
      </div>
      <div className='bottom'>
        <div className='grid-con'>
          {props.icon ? (
            <img
              src={`http://openweathermap.org/img/w/${props.icon}.png`}
              alt=''
              width='70'
            />
          ) : (
            ''
          )}
          <p>{props.name}</p>
        </div>
        <h1>Weather App</h1>
      </div>
    </header>
  );
}

export default Header;
