import './Contactos.css';

const Contacto = () => (
  <section className='contactos-conta'>
    <h1 className='tite-contac'>Contacto</h1>
    <form className='form-contactos'>
      <input className= 'contacto-input' type="text" placeholder="Nombre completo" /><br />
      <input className= 'contacto-input' type="email" placeholder="Correo electrónico" /><br />
      <input className= 'contacto-input' type="tel" placeholder="Teléfono" /><br />
      <input className= 'contacto-input' type="text" placeholder="Asunto" /><br />
      <textarea className='contacto-textarea' placeholder="Escribe tu mensaje."></textarea><br />
      <button  className= 'contacto-button' type="submit">Enviar</button>
    </form>
  </section>
);

export default Contacto;