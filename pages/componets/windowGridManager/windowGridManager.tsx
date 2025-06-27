import React, { useEffect, useMemo, useState } from 'react';
import Window from '../window/window';
import { Props } from '../../interfaz/Props';
import './windowGridManager.css';

function getGridConfig(width: number) {
  if (width < 768) return { cols: 1, rows: 6 };      // Móvil
  if (width < 1024) return { cols: 2, rows: 3 };     // Tablet
  return { cols: 3, rows: 3 };                       // PC
}

const WindowGridManager: React.FC<Props> = ({ data }) => {
  const [page, setPage] = useState(0);
  const [grid, setGrid] = useState(getGridConfig(typeof window !== 'undefined' ? window.innerWidth : 1200));

  // Actualiza el grid al cambiar el tamaño de la ventana
  useEffect(() => {
    const onResize = () => setGrid(getGridConfig(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const perPage = grid.cols * grid.rows;
  const totalPages = Math.ceil(data.length / perPage);

  // Precarga imágenes de la página actual y adyacentes
  useEffect(() => {
    const preload = (pageIdx: number) => {
      const start = pageIdx * perPage;
      const end = Math.min(start + perPage, data.length);
      data.slice(start, end).forEach(item =>
        item.images.forEach(src => {
          const img = new window.Image();
          img.src = src;
        })
      );
    };
    preload(page);
    if (page > 0) preload(page - 1);
    if (page < totalPages - 1) preload(page + 1);
    // eslint-disable-next-line
  }, [page, perPage, data, totalPages]);

  // Datos de la página actual
  const pageData = useMemo(() => {
    const start = page * perPage;
    return data.slice(start, start + perPage);
  }, [page, perPage, data]);

  return (
    <div className="window-grid-manager">
      <div
        className="window-grid"
        style={{
          gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
        }}
      >
        {pageData.map((item, idx) => (
          <Window key={page * perPage + idx} {...item} />
        ))}
      </div>
      <div className="window-grid-manager-pagination">
        <button
          onClick={() => setPage(p => Math.max(p - 1, 0))}
          disabled={page === 0}
        >
          Anterior
        </button>
        <span>Página {page + 1} de {totalPages}</span>
        <button
          onClick={() => setPage(p => Math.min(p + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default WindowGridManager;