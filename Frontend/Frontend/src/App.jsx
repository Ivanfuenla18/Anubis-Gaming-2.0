import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Catalogo } from './components/Catalogo';
import { Articulo } from './components/Articulo'; // Importa el nuevo componente

function App() {
  const [videojuegoSeleccionado, setVideojuegoSeleccionado] = useState(null);

  return (
    <>
      <Header />
      {videojuegoSeleccionado ? (
        <Articulo juego={videojuegoSeleccionado} onClose={() => setVideojuegoSeleccionado(null)} />
      ) : (
        <Catalogo onSelectJuego={setVideojuegoSeleccionado} />
      )}
    </>
  );
}

export default App;
