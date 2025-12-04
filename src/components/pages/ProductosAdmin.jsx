import React, { useEffect, useState } from "react";
import Footer from "../organisms/Footer";
import ProductService from "../../services/ProductoService";
import Navegador from "../organisms/Navegador";

const ProductosAdmin = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // form state
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
            <div style={{ padding: "20px" }}>
                <h1>Gestión de Productos</h1>

                <div style={{ marginBottom: "20px" }}>
                    <button onClick={() => setFormVisible(!formVisible)}>
                        {formVisible ? "Cancelar" : "Agregar Producto"}
                    </button>
                </div>

                {formVisible && (
                    <form onSubmit={handleCreateProducto} style={{ marginBottom: "20px" }}>
                        <div>
                            <label>Nombre:</label><br />
                            <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div>
                            <label>Descripción:</label><br />
                            <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                        </div>
                        <div>
                            <label>Precio:</label><br />
                            <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                        </div>
                        <div>
                            <label>Categoría:</label><br />
                            <input value={categoria} onChange={(e) => setCategoria(e.target.value)} />
                        </div>
                        <div>
                            <label>URL imagen:</label><br />
                            <input value={imagen} onChange={(e) => setImagen(e.target.value)} />
                        </div>
                        <div style={{ marginTop: "10px" }}>
                            <button type="submit">Crear</button>
                        </div>
                    </form>
                )}

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "20px",
                    }}
                >
                    {productos.map((p) => (
                        <div
                            key={p.id}
                            style={{
                                border: "1px solid #ccc",
                                padding: "10px",
                                borderRadius: "10px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            }}
                        >
                            <img
                                src={p.imagen || "https://via.placeholder.com/200"}
                                alt={p.nombre}
                                style={{ width: "100%", height: "200px", objectFit: "contain" }}
                            />
                            <div>
                                <h3 style={{ margin: "10px 0" }}>{p.nombre}</h3>
                                <p style={{ color: "#555", fontSize: "0.9rem" }}>{p.descripcion}</p>
                                <p><strong>Categoría:</strong> {p.categoria}</p>
                            </div>
                            <div style={{ marginTop: "10px", fontWeight: "bold", fontSize: "1.2rem" }}>
                                ${p.precio}
                            </div>

                            <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                                <button onClick={() => handleDeleteProducto(p.id)} style={{ background: "#e74c3c", color: "white", border: "none", padding: "8px 12px", borderRadius: "6px" }}>
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductosAdmin;