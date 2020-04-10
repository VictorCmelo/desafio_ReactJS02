import React, { useState, useEffect } from "react";
import api from './services/api';
import "./styles.css";

function App() {
  const [repositories, setRepository] = useState([]);

  useEffect(() => {
    api.get('/repositories').then( response => {
      setRepository(response.data);
    })
  }, []);

  async function handleAddRepository() {
    const  response = await api.post('/repositories', {
        url  : "https://github.com/Rocketseat/umbriel",
        title: `Novo projeto ${Date.now()}`,
        techs: ["Node", "Express", "TypeScript"]
    });

    const repository = response.data;

    setRepository([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    try {
      await api.delete(`repositories/${id}`, { });

      setRepository(repositories.filter(repositories => repositories.id !== id));


  } catch {
      alert('Erro ao deletar caso, tente novamente');
  }
  }

  return (
    <div>
      <ul data-testid="repository-list">
        
          {repositories.map(repositories => <li key={repositories.id}>{repositories.title}
            <button onClick={() => handleRemoveRepository(repositories.id)}>
            Remover
          </button>
          
          </li>)}
        
       
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
