'use client';
import { useState } from 'react';
import WindowGridManager from './componets/windowGridManager/windowGridManager';
import { Tenant } from './interfaz/Tenant';

export default function Home({ tenant }: { tenant: Tenant }) {
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
