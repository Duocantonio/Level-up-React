import React, { useEffect, useState } from "react";
import Footer from "../organisms/Footer";
import ProductService from "../../services/ProductoService";
import Navegador from "../organisms/Navegador";
import "../Style/ProductoAdmin.css"; // IMPORTANTE

const ProductosAdmin = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Estado formulario
    const [formVisible, setFormVisible] = useState(false);
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("");

    const fetchProductos = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await ProductService.getAllProductos();
            setProductos(response.data);
        } catch (err) {
            console.error("Error obteniendo productos:", err);
            setError("No se pudieron cargar los productos.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductos();
    }, []);

    const handleCreateProducto = async (e) => {
        e.preventDefault();
        if (!nombre || !precio) {
            setError("Nombre y precio son obligatorios.");
            return;
        }

        const nuevoProducto = {
            nombre,
            descripcion,
            precio: Number(precio),
            categoria,
            imagen
        };

        try {
            await ProductService.createProducto(nuevoProducto);
            setNombre("");
            setDescripcion("");
            setPrecio("");
            setCategoria("");
            setImagen("");
            setFormVisible(false);
            await fetchProductos();
        } catch (err) {
            console.error("Error creando producto:", err);
            setError("No se pudo crear el producto.");
        }
    };

    const handleDeleteProducto = async (id) => {
        if (!window.confirm("¿Eliminar este producto?")) return;
        try {
            await ProductService.deleteProducto(id);
            await fetchProductos();
        } catch (err) {
            console.error("Error eliminando producto:", err);
            setError("No se pudo eliminar el producto.");
        }
    };

    if (loading) {
        return (
            <>
                <Navegador />
                <div style={{ padding: "20px", textAlign: "center" }}>
                    <h2>Cargando productos...</h2>
                </div>
                <Footer />
            </>
        );
    }

    if (error) {
        return (
            <>
                <Navegador />
                <div style={{ padding: "20px", color: "red", textAlign: "center" }}>
                    <h2>{error}</h2>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navegador />

            <div className="productos-admin">
                <h1>Gestión de Productos</h1>

                <div className="actions">
                    <button
                        className="btn-primary"
                        onClick={() => setFormVisible(!formVisible)}
                    >
                        {formVisible ? "Cancelar" : "Agregar Producto"}
                    </button>
                </div>

                {formVisible && (
                    <form className="form-card" onSubmit={handleCreateProducto}>
                        <div className="form-group">
                            <label className="form-label">Nombre:</label>
                            <input
                                className="input"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Descripción:</label>
                            <textarea
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Precio:</label>
                            <input
                                className="input"
                                type="number"
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Categoría:</label>
                            <input
                                className="input"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">URL Imagen:</label>
                            <input
                                className="input"
                                value={imagen}
                                onChange={(e) => setImagen(e.target.value)}
                            />
                        </div>

                        <div className="form-actions">
                            <button className="btn-primary" type="submit">
                                Crear Producto
                            </button>
                        </div>
                    </form>
                )}

                <div className="grid-products">
                    {productos.map((p) => (
                        <div className="product-card" key={p.id}>
                            <img
                                src={p.imagen || "https://via.placeholder.com/200"}
                                alt={p.nombre}
                                className="product-img"
                            />

                            <h3 className="product-title">{p.nombre}</h3>

                            <p className="product-desc">{p.descripcion}</p>

                            <p className="product-meta">
                                <strong>Categoría:</strong> {p.categoria}
                            </p>

                            <p className="product-price">${p.precio}</p>

                            <button
                                className="btn-delete"
                                onClick={() => handleDeleteProducto(p.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProductosAdmin;