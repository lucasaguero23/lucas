import { useState, useEffect } from "react";

export function Ejercicio5() {
  const [personas, setPersonas] = useState([]);
  const [tareas, setTareas] = useState({});
  const [loadingTasks, setLoadingTasks] = useState(false);

  const handleMostrarPersonas = async (personaId) => {
    setLoadingTasks(true);
    try {
      if (!personas.length) {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (res.ok) {
          const nuevasPersonas = await res.json();
          setPersonas(nuevasPersonas);
        } else {
          console.error("Error: no llegaron los datos");
        }
      }

      if (personaId) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${personaId}/todos`);
        if (res.ok) {
          const data = await res.json();
          setTareas((prevTareas) => ({
            ...prevTareas,
            [personaId]: data,
          }));
        } else {
          console.error("Error en fetch");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoadingTasks(false);
    }
  };

  useEffect(() => {
    handleMostrarPersonas();
  }, []);

  return (
    <>
      <h1>Listado de personas</h1>
      <ul>
        {personas.map((persona) => (
          <li key={persona.id} >
            <p><strong>ID:</strong> {persona.id}</p>
            <p><strong>Nombre:</strong> {persona.name}</p>
            <p><strong>Email:</strong> {persona.email}</p>
            <p><strong>Sitio web:</strong> {persona.website}</p>
            <button style={{backgroundColor: "grey", color: "white"}}onClick={() => handleMostrarPersonas(persona.id)}>
              Ver tareas
            </button>
            {tareas[persona.id] && (
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                {tareas[persona.id].map((task) => (
                  <li key={task.id}>
                    {task.title} {task.completed ? "✓" : "✗"}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {loadingTasks && <p>Cargando la lista.....................</p>}
    </>
  );
}

export default Ejercicio5;
