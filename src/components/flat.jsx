import React from 'react';

// import "./assets/stylesheets/_cards.scss";

const Flat = ({ data }) => {
  return (
    <div className="card" style={{ backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${data.imageUrl}')` }}>
      <div className="card-category">{data.price} {data.priceCurrency}</div>
      <div className="card-description">
        <h2>{data.name}</h2>
      </div>
      <a className="card-link" href="#"></a>
    </div>
  );
};

export default Flat;
