// Card.jsx
import React, { useState } from 'react';
import './Card.css';

const Card = ({ title, age, img, description, story }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card-inner">
        <div className="card-front" style={{ width: '380px' }}>
          <img src={img} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />
          <div className="front-content">
            <h3>{title}</h3>
            <p>{age}</p>
          </div>
        </div>
        <div className="card-back">
          <div className="back-content">
            <h2>{description}</h2>
            <p>{story}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
