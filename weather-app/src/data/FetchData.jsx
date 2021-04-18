// import React, { useState, useEffect } from 'react';

// const spinner = document.getElementById('spinner');

// const FetchData = (props) => {
//   const [data, setData] = useState('');

//   useEffect(() => {
//     //spinner.removeAttribute('hidden');
//     fetch(
//       `http://api.openweathermap.org/data/2.5/weather?q=${props}&appid=2fe718525b16b5eab66f09e093430d6d`
//     )
//       .then((response) => {
//         return response.status !== 200
//           ? console.log('There must be a problem')
//           : response.json();
//       })
//       .then((data) => {
//         //spinner.setAttribute('hidden', ''); Miért nem működik, grrr?!
//         setData(data);
//       });
//   }, []);

//   return <div /*hidden*/ id='load-animation'></div>;
// };

// export default FetchData;
