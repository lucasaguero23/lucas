import React, { useState } from 'react';

const App = () => {
  const [boton, setBoton] = useState('izquierdo');

  const handleClick = (button) => {
    if (button === 'izquierdo') {
      setBoton('centro');
    } else if (button === 'centro') {
      setBoton('derecho');
    } else if (button === 'derecho') {
      setBoton('izquierdo');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
      <button
        disabled={boton !== 'izquierdo'}
        onClick={() => handleClick('izquierdo')}
      >
        Izquierdo
      </button>
      <button
        disabled={boton !== 'centro'}
        onClick={() => handleClick('centro')}
      >
        Centro
      </button>
      <button
        disabled={boton !== 'derecho'}
        onClick={() => handleClick('derecho')}
      >
        Derecho
      </button>
    </div>
  );
};

export default App;
