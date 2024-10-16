import { useState } from "react";

interface ProductoProps {
    nombre: string;
    imagen: string;
}

export const Producto: React.FC<ProductoProps> = ({ nombre, imagen }) => {
    const [favorito, setFavorito] = useState(false);

    const alternarFavorito = () => {
        setFavorito(!favorito);
    };

    return (
        <div className="producto">
            <img src={imagen} alt={nombre} className="producto-imagen" />
            <h3>{nombre}</h3>
            <button onClick={alternarFavorito} className="favorito-btn">
                <i className={`bi ${favorito ? 'bi-heart-fill' : 'bi-heart'}`}></i>
            </button>
        </div>
    );
};
