import React, { useState, useEffect } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import { v4 as uuidv4 } from 'uuid';

const Pexels = ({ city }) => {
  const [pic, setPic] = useState([]);

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/search?query=${city}`, {
      headers: {
        Authorization:
          '563492ad6f91700001000001624e4931fdff476b9829b1940987757f',
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setPic(data.photos.map((photo) => photo.src.large));
      });
  }, []);

  return (
    <div className='img-container'>
      {pic.length !== 0 ? <ImageGallery key={uuidv4()} src={pic} /> : ''}
    </div>
  );
};

export default Pexels;
