import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('center');

  return (
    <div>
      <div>
        <label htmlFor="flexDirection">Dirección:</label>
        <select id="flexDirection" value={flexDirection} onChange={(e) => setFlexDirection(e.target.value)}>
          <option value="row">Fila</option>
          <option value="column">Columna</option>
          <option value="row-reverse">Fila al revés</option>
          <option value="column-reverse">Columna al revés</option>
        </select>

        <label htmlFor="justifyContent">Justificado:</label>
        <select id="justifyContent" value={justifyContent} onChange={(e) => setJustifyContent(e.target.value)}>
          <option value="flex-start">Flex Start</option>
          <option value="flex-end">Flex End</option>
          <option value="center">Center</option>
          <option value="space-between">Space Between</option>
          <option value="space-around">Space Around</option>
          <option value="space-evenly">Space Evenly</option>
        </select>

        <label htmlFor="alignItems">Alineado:</label>
        <select id="alignItems" value={alignItems} onChange={(e) => setAlignItems(e.target.value)}>
          <option value="stretch">Stretch</option>
          <option value="flex-start">Flex Start</option>
          <option value="flex-end">Flex End</option>
          <option value="center">Center</option>
          <option value="baseline">Baseline</option>
        </select>
      </div>

      <div
        className="contenedor"
        style={{
          flexDirection: flexDirection,
          justifyContent: justifyContent,
          alignItems: alignItems,
        }}
      >
        <div className="item1">Item 1</div>
        <div className="item2">Item 2</div>
        <div className="item3">Item 3</div>
      </div>
    </div>
  );
};

export default App;
