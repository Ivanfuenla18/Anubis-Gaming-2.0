import React, { useEffect, useState } from 'react';
import './css/Catalogo.css';

export const Catalogo = ({ onSelectJuego }) => {
    const [videojuegos, setVideojuegos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/videojuegos")
            .then((res) => res.json())
            .then((data) => setVideojuegos(data))
            .catch((error) => console.error("Error al obtener los videojuegos:", error));
    }, []);

    return (
        <div className="cat-root">
            {videojuegos.length === 0 ? (
                <h1 className='cat-carg'>Cargando videojuegos...</h1>
            ) : (
                videojuegos.map((juego) => (
                    <div key={juego.id} className="cat-card-root" onClick={() => onSelectJuego(juego)}>
                        <div className="cat-card">
                            <div className="cat-card-img-wrapper">
                                <img className="cat-card-img" src={juego.url} alt={juego.nombre} />
                            </div>
                        </div>
                        <div className="cat-card-text">
                            <div className="cat-card-title">{juego.titulo}</div>
                            <div className="cat-card-price">{juego.precio}€</div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};
