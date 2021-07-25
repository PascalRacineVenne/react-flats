import React, { useState } from 'react';

import Flat from './flat';

const tmpFlat = {
  name: "Charm at the Steps of the Sacre Coeur/Montmartre",
  imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
  price: 164,
  priceCurrency: "EUR",
  lat: 48.884211,
  lng: 2.34689
};


const App = () => {
  const [flats, setFlats] = useState([tmpFlat]);
  return (
    <div className="app">
      <div className="flat-list">
        {flats.map((flat) => (
          <Flat key={flat.id} data={flat} />
        )}
      </div>
      <div className="map-container">

      </div>
    </div>

  );
};

export default App;
