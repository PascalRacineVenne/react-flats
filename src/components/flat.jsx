import React from 'react';

// import "./assets/stylesheets/_cards.scss";

const Flat = ({ data }) => {
  return (
    <div className="card" style={{ backgroundImage: `url('${data.imageUrl}')` }}>
      <div className="card-category">{data.price}</div>
      <div className="card-description">
        <h2>{data.name}</h2>
      </div>
      <a className="card-link" href="#"></a>
    </div>
  );
};

export default Flat;
