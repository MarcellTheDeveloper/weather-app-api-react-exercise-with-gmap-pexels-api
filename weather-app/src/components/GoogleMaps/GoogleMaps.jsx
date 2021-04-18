import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '80%',
  minWidth: '300px',
  maxWidth: '1200px',
  height: '30vw',
  minHeight: '250px',
  maxHeight: '450px',
  borderRadius: '6px',
  boxShadow: '0 0 12px 0 rgb(0 0 0 / 20%)',
  featureType: 'water',
};

const GoogleMaps = ({ location }) => {
  console.log(location);
  return (
    <LoadScript googleMapsApiKey='AIzaSyDF-hI9NJYO3fDYt6fDCyRwtHi0wPyckWc'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      ></GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
