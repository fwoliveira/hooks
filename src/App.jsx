import './App.css';
import React, { useEffect,useState } from 'react';

function App() {

  const [name, setName] = useState('Senac Campinas')
  let interval = null;
  interval = setInterval(() => {
    setName('ReactJS');
  }, 5000);
// Desta maneira podemos simular o componentDidMount e o componentDidUpdate
useEffect(() => {
  document.title = name;
  // Aqui estou executando o componentWillUnmount
  return () => clearInterval(interval);
}, [name]);

  return (
    <div className="App">
      <h1>Cnaczera</h1>
    </div>
  );
}

export default App;