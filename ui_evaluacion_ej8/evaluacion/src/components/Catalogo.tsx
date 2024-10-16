import { Producto } from "./Producto";
import '../catalogo.css'

const productos = [
    { nombre: "Juguera", imagen: "/img/juguera.jpeg" },
    { nombre: "Bicicleta", imagen: "/img/bicicleta.png" },
    { nombre: "Notebook", imagen: "/img/notebook.webp" },
    { nombre: "Pelota", imagen: "/img/pelota.jpeg" }
];

const Catalogo = () => {
    return (
        <div className="lista-productos">
            {productos.map((producto) => (
                <Producto 
                    key={producto.nombre}
                    nombre={producto.nombre}
                    imagen={producto.imagen}
                />
            ))}
        </div>
    );
};

export default Catalogo;