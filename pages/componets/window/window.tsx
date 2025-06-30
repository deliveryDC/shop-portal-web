import React, { useState } from 'react';
import { WindowProps } from '../../interfaz/WindowProps';
import Image from 'next/image';
import styles from './window.module.css';

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
      <div className={styles['window-component']}>
        <div className={styles['window-images']}>
          {index > 0 && (
            <button className={`${styles.arrow} ${styles.left}`} onClick={prev}>
              &#10094;
            </button>
          )}
          <div
            style={{ cursor: 'pointer', width: '100%', height: '100%' }}
            onClick={() => {
              setModalOpen(true);
              setModalIndex(index);
            }}
          >
            <Image
              src={images[index]}
              alt={`${title} imagen ${index + 1}`}
              width={300}
              height={320}
              className={styles['window-img']}
              style={{
                objectFit: 'contain',
                borderRadius: 12,
                width: '100%',
                height: '100%',
              }}
              priority={index === 0}
            />
          </div>
          {index < images.length - 1 && (
            <button className={`${styles.arrow} ${styles.right}`} onClick={next}>
              &#10095;
            </button>
          )}
        </div>
        <h3>{title}</h3>
        <div className={styles['window-price']}>
          {price} <span>COP</span>
        </div>
      </div>

      {modalOpen && (
        <div
          className={styles['window-modal']}
          onClick={() => setModalOpen(false)}
          tabIndex={-1}
        >
          <div className={styles['window-modal-content']} onClick={(e) => e.stopPropagation()}>
            {modalIndex > 0 && (
              <button className={`${styles.arrow} ${styles.left}`} onClick={modalPrev}>
                
                &#10094;
              </button>
            )}
            <Image
              src={images[modalIndex]}
              alt={`${title} imagen grande ${modalIndex + 1}`}
              width={800}
              height={600}
              className={styles['window-modal-img']}              
              style={{ objectFit: 'contain', borderRadius: 16, background: '#fff' }}
              priority
            />
            {modalIndex < images.length - 1 && (
              <button className={`${styles.arrow} ${styles.right}`} onClick={modalNext}>
                &#10095;
              </button>
            )}
            <button
              className={styles['window-modal-close']}              
              onClick={() => setModalOpen(false)}
              aria-label="Cerrar imagen"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Window;
