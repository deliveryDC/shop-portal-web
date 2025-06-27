import React, { useState } from 'react';
import { WindowProps } from '../../interfaz/WindowProps';
import './window.css';

const Window: React.FC<WindowProps> = ({ images, title, price }) => {
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));
  const next = () => setIndex((prev) => Math.min(prev + 1, images.length - 1));

  // Modal navigation
  const modalPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const modalNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  };

  return (
    <>
      <div className="window-component">
        <div className="window-images">
          {index > 0 && (
            <button className="arrow left" onClick={prev}>
              &#10094;
            </button>
          )}
          <img
            src={images[index]}
            alt={`${title} imagen ${index + 1}`}
            onClick={() => {
              setModalOpen(true);
              setModalIndex(index);
            }}
            style={{ cursor: 'pointer' }}
          />
          {index < images.length - 1 && (
            <button className="arrow right" onClick={next}>
              &#10095;
            </button>
          )}
        </div>
        <h3>{title}</h3>
        <div className="window-price">
          {price} <span>COP</span>
        </div>
      </div>

      {modalOpen && (
        <div
          className="window-modal"
          onClick={() => setModalOpen(false)}
          tabIndex={-1}
        >
          <div className="window-modal-content" onClick={e => e.stopPropagation()}>
            {modalIndex > 0 && (
              <button className="arrow left" onClick={modalPrev}>
                &#10094;
              </button>
            )}
            <img
              src={images[modalIndex]}
              alt={`${title} imagen grande ${modalIndex + 1}`}
              className="window-modal-img"
            />
            {modalIndex < images.length - 1 && (
              <button className="arrow right" onClick={modalNext}>
                &#10095;
              </button>
            )}
            <button className="window-modal-close" onClick={() => setModalOpen(false)} aria-label="Cerrar imagen">&times;</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Window;
