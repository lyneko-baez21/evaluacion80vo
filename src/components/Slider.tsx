import React, { useState } from 'react';
import './Slider.css';

// Define las propiedades que el componente Slider recibirá
interface SliderProps {
  imagenes: string[];
}

const Slider: React.FC<SliderProps> = ({ imagenes }) => {
  const [indice, setIndice] = useState(0);

  const siguienteImagen = () => {
    setIndice((prevIndice) => (prevIndice + 1) % imagenes.length);
  };

  const anteriorImagen = () => {
    setIndice((prevIndice) =>
      prevIndice === 0 ? imagenes.length - 1 : prevIndice - 1
    );
  };

  return (
    <div className="slider-container">
      <button  onClick={anteriorImagen} className="slider-btn">❮</button>
      <img src={imagenes[indice]} alt={`Slide ${indice + 1}`} className="slider-img" />
      <button onClick={siguienteImagen} className="slider-btn">❯</button>
    </div>
  );
};

export default Slider;