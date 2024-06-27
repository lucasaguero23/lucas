import React, { useState } from 'react';


const App = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    altura: '',
    email: '',
  });

  const [mensaje, setMensaje] = useState('');
  const [mensajeColor, setMensajeColor] = useState('red');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, apellido, edad, altura, email } = formulario;

    if (nombre === '' || apellido === '' || edad === "" || altura === "" || email === ""|| nombre.length > 50 || apellido.length > 50) {
      setMensaje('no pueden haber datos vacios y el nombre y el apellido deben tener un máximo de 50 caracteres.');
      setMensajeColor('red');
      return;
    }

    if (edad < 18 || edad < 0) {
      setMensaje('La edad no debe ser negativa y debe ser mayor de edad');
      setMensajeColor('red');
      return;
    }

    if (altura < 0 || altura > 230) {
      setMensaje('La altura no puede ser negativa y no puede ser mayor a 230 cm.');
      setMensajeColor('red');
      return;
    }

    if (email === '' || !email.includes('@')) {
      setMensaje('El correo electrónicodebe incluir el "@"');
      setMensajeColor('red');
      return;
    }

    setMensaje('Todos los datos son validos.');
    setMensajeColor('green');
  };

  return (
    <div className="App">
      <h1>Llene el formulario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formulario.apellido}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            id="edad"
            name="edad"
            value={formulario.edad}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="altura">Altura (cm):</label>
          <input
            type="number"
            id="altura"
            name="altura"
            value={formulario.altura}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <p style={{ color: mensajeColor }}>{mensaje}</p>
    </div>
  );
};

export default App;
