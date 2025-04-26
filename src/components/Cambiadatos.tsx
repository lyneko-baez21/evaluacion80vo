import './Cambiadatos.css';

const mostrarComida = () => {
  const comida = 'pizza';
  const categoria = 'Comida favorita';
  const elemento = document.querySelector("#dato1");
  if (elemento) {
    elemento.innerHTML = `${categoria}: ${comida}`;
  }
};

const mostrarAnimal = () => {
  const animal = 'gatos';
  const categoria = 'Animal favorito';
  const elemento = document.querySelector("#dato2");
  if (elemento) {
    elemento.innerHTML = `${categoria}: ${animal}`;
  }
};

const mostrarPelicula = () => {
  const pelicula = 'EL abismo';
  const categoria = 'Película favorita';
  const elemento = document.querySelector("#dato3");
  if (elemento) {
    elemento.innerHTML = `${categoria}: ${pelicula}`;
  }
};

const mostrarSerie = () => {
  const serie = 'Dan da dan';
  const categoria = 'Serie favorita';
  const elemento = document.querySelector("#dato4");
  if (elemento) {
    elemento.innerHTML = `${categoria}: ${serie}`;
  }
};

function Cambiadatos() {
  setTimeout(mostrarComida, 2000);
  setTimeout(mostrarAnimal, 4000);
  setTimeout(mostrarPelicula, 6000);
  setTimeout(mostrarSerie, 8000);

  return (
    <div className="cambia-datos-container">
      <h2 className = 'cambia-datos-cont' >Datos Dinámicos</h2>
      <p className = 'cambia-datos' id="dato1">(Comida)</p>
      <p className = 'cambia-datos' id="dato2">(Animal)</p>
      <p className = 'cambia-datos' id="dato3">(Película)</p>
      <p className = 'cambia-datos' id="dato4">(Serie)</p>
    </div>
  );
}

export default Cambiadatos;
