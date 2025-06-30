'use client';

import { useState } from 'react';
import WindowGridManager from './componets/windowGridManager/windowGridManager';
import { Tenant } from './interfaz/Tenant';

const productos = [
  {
    images: [
      '/tienda1/pijama1.0.jpeg',
      '/tienda1/pijama1.1.jpeg',
      '/tienda1/pijama1.2.jpeg',
      '/tienda1/pijama1.3.jpeg'
    ],
    title: 'Producto Destacado',
    price: 42000
  },
  {
    images: [
      '/tienda1/pijama2.0.jpeg',
      '/tienda1/pijama2.1.jpeg',
      '/tienda1/pijama2.2.jpeg',
      '/tienda1/pijama2.3.jpeg'      
    ],
    title: 'Producto Destacado 2',
    price: 52000
  },
  {
    images: [
      '/tienda1/pijama3.0.jpeg',
      '/tienda1/pijama3.1.jpeg',
      '/tienda1/pijama3.2.jpeg',
      '/tienda1/pijama3.3.jpeg'
    ],
    title: 'Producto Destacado 2',
    price: 52000
  },
  {
    images: [
      '/tienda1/pijama4.0.jpeg',
      '/tienda1/pijama4.1.jpeg',
      '/tienda1/pijama4.2.jpeg',
      '/tienda1/pijama4.3.jpeg'
    ],
    title: 'Producto Destacado 2',
    price: 52000
  },
   {
    images: [
      '/tienda1/pijama5.0.jpeg',
      '/tienda1/pijama5.1.jpeg',
      '/tienda1/pijama5.2.jpeg',
      '/tienda1/pijama5.3.jpeg'
    ],
    title: 'Producto Destacado 2',
    price: 52000
  }
];

export default function Home({ tenant }: Tenant) {
  const [open, setOpen] = useState(false);
  console.log('tenant:', tenant);
  return (
    <div style={{ backgroundColor: tenant.primaryColor }}>
      <header>
        <div className="container">
          <nav aria-label="Main navigation">
            <div className="logo" tabIndex={0}>{tenant.title}</div>            
            <button
              className="hamburger"
              aria-label="Abrir menú"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
              <span />
            </button>            
            <div className={`nav-links${open ? ' open' : ''}`}>
              <a href="#home" tabIndex={0} onClick={() => setOpen(false)}>Inicio</a>
              <a href="#categories" tabIndex={0} onClick={() => setOpen(false)}>Categorías</a>
              <a href="#products" tabIndex={0} onClick={() => setOpen(false)}>Productos</a>
              <a href="#contact" tabIndex={0} onClick={() => setOpen(false)}>Contacto</a>
            </div>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero" role="banner" aria-label="Sección principal de bienvenida">
          <h2>{tenant.describeTitle}</h2>
          <p>
            {tenant.describe}
          </p>
          <button
            className="btn-primary"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Ver productos"
          >
            Ver Productos
          </button>
        </section>
        <WindowGridManager data={tenant.products} />
      </main>

      <footer>
        &copy; 2025 Tienda de Ropa Moderna. Todos los derechos reservados.
      </footer>
    </div>
  );
}
