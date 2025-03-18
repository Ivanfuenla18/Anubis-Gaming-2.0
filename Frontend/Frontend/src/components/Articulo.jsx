import React from 'react';
import './css/Articulo.css'; 

export const Articulo = ({ juego, onClose }) => {
    return (
        <div className="articulo-container">
            <div className="articulo-card">
                {/* Contenedor de imagen para la superposición de elementos */}
                <div className="articulo-img-wrapper">
                    <img className="articulo-img" src={juego.url} alt={juego.titulo} />
                    <button className="articulo-close" onClick={onClose}>✖</button>
                    
                    {/* Contenedor de información con fondo semitransparente */}
                    <div className="articulo-info">
                        <h2 className="articulo-title">{juego.titulo}</h2>
                        <p className="articulo-desc">{juego.descripcion}</p>
                        
                        {/* Nueva información agregada */}
                        <p><strong>🎮 Género:</strong> {juego.genero}</p>
                        <p><strong>🖥️ Plataforma:</strong> {juego.plataforma}</p>
                        <p><strong>🏢 Desarrollador:</strong> {juego.desarrollador}</p>
                        <p><strong>📅 Lanzamiento:</strong> {juego.fecha_lanzamiento}</p>

                        <h3 className="articulo-price">
                            <span className="articulo-price-old">{juego.precioAntiguo}</span> {juego.precio} €
                        </h3>
                        <button className="articulo-comprar">🛒 Añadir a la cesta</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};
