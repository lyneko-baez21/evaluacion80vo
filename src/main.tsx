import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Description from './components/Description';
import NavBar from './components/Nabvar';
import Contacto from './components/Contacto';
import Slider from './components/Slider';
import Cambiadatos from './components/Cambiadatos';
import Nosotros from './components/nosotros';
import Productos from './components/productos';

import slider1 from './assets/slider1.jpg';
import slider2 from './assets/slider2.jpg';
import slider3 from './assets/slider3.jpg';
import slider4 from './assets/slider4.jpg';

const  imagenes = [slider1, slider2, slider3, slider4];



const path = window.location.pathname;

let contenido: React.ReactNode = (
  <>
    <NavBar />
    <Description />
  </>
);

if (path.endsWith('nosotros.html')) {
  contenido = (
    <>
      <NavBar />
      <Nosotros />
      <Cambiadatos />
    </>
  );
}

if (path.endsWith('productos.html')) {
  contenido = (
    <>
      <NavBar />
      <Productos />
      <Slider imagenes={imagenes} />
    </>
  );
}

if (path.endsWith('contacto.html')) {
  contenido = (
    <>
      <NavBar />
      <Contacto />
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   {contenido}
  </StrictMode>,
);
