import React, { useState } from 'react';


const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [mensajeColor, setMensajeColor] = useState('');

  const handlePesoChange = (e) => setPeso(e.target.value);
  const handleAlturaChange = (e) => setAltura(e.target.value);

  const calcularIMC = (e) => {
    e.preventDefault();
    const alturaMetros = altura / 100;
    const imcValue = (peso / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(imcValue);

    if (imcValue < 18.5) {
      setMensaje('Nivel bajo');
      setMensajeColor('grey');
    } else if (imcValue >= 18.5 && imcValue <= 24.9) {
      setMensaje('Nivel normal');
      setMensajeColor('green');
    } else if (imcValue >= 25 && imcValue <= 29.9) {
      setMensaje('Nivel de sobrepeso');
      setMensajeColor('orange');
    } else if (imcValue >= 30) {
      setMensaje('Nivel de obesidad');
      setMensajeColor('red');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <div>
          <label htmlFor="peso">Peso (kg):</label>
          <input
            type="number"
            id="peso"
            name="peso"
            value={peso}
            onChange={handlePesoChange}
            required
          />
        </div>
        <div>
          <label htmlFor="altura">Altura (cm):</label>
          <input
            type="number"
            id="altura"
            name="altura"
            value={altura}
            onChange={handleAlturaChange}
            required
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      {imc && (
        <p style={{ color: mensajeColor }}>
          Tu IMC es {imc}. {mensaje}
        </p>
      )}
    </div>
  );
};

export default App;
