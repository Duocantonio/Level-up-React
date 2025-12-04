import React, { useEffect, useState } from "react";
import Footer from "../organisms/Footer";
import ProductService from "../../services/ProductoService";
import Navegador from "../organisms/Navegador";

const ProductosAdmin = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const response = await ProductService.getAll();
                setProductos(response.data);
            } catch (err) {
                console.error("Error obteniendo productos:", err);
                setError("No se pudieron cargar los productos.");
            } finally {
                setLoading(false);
            }
        };

        cargarProductos();
    }, []);

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
                                src={p.imagen || "https://via.placeholder.com/200"} // Fallback si no hay imagen
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
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductosAdmin;