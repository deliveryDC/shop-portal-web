import React, { useState } from 'react';
import { WindowProps } from '../../interfaz/windowProps';
import './window.css';

const Window: React.FC<WindowProps> = ({ images, title, price }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));
  const next = () => setIndex((prev) => Math.min(prev + 1, images.length - 1));

  return (
    <div className="window-component">
      <div className="window-images">
        {index > 0 && (
          <button className="arrow left" onClick={prev}>
            &#10094;
          </button>
        )}
        <img src={images[index]} alt={`${title} imagen ${index + 1}`} />
        {index < images.length - 1 && (
          <button className="arrow right" onClick={next}>
            &#10095;
          </button>
        )}
      </div>
      <h3>{title}</h3>
      <div className="window-price">
        {price} <span>MXN</span>
      </div>
    </div>
  );
};

export default Window;
