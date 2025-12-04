import React, { useEffect, useState } from "react";
import Navegador from "../organisms/Navegador";
import Xbox_Series_X from '../../assets/Logos/Xbox_Series_X.png';
import PS5 from '../../assets/Logos/PS5.png';
import Nintendo_Switch from '../../assets/Logos/Nintendo_Switch.jpg';
import Steam_Deck from '../../assets/Logos/Steam_Deck.jpg';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Footer from "../organisms/Footer";
import '../Style/Consolas.css';
import ProductoService from "../../services/ProductoService";


const consolasLocal = [
  {
    imagen: Xbox_Series_X,
    titulo: "Xbox Series X",
    descripcion: "La consola más potente de Xbox hasta la fecha, con un rendimiento excepcional y una experiencia de juego inmersiva.",
    precio: "$499.990"
  },
  {
    imagen: PS5,
    titulo: "PlayStation 5",
    descripcion: "La consola de última generación de Sony, con un rendimiento impresionante y una biblioteca de juegos exclusiva.",
    precio: "$499.990"
  },
  {
    imagen: Nintendo_Switch,
    titulo: "Nintendo Switch",
    descripcion: "La consola híbrida de Nintendo que te permite jugar en casa o en cualquier lugar.",
    precio: "$299.990"
  },
  {
    imagen: Steam_Deck,
    titulo: "Steam Deck",
    descripcion: "La consola portátil de Valve diseñada para jugar tus juegos de Steam en cualquier lugar.",
    precio: "$399.990"
  }
];


export default function Consolas() {

  const [productos, setProductos] = useState([]);

  const mergeproductos = (productosAPI, productosLocal = []) => {
    const titulosLocal = productosLocal.map(p => p.titulo);
    return [
      ...productosLocal,
      ...productosAPI.filter(p => !titulosLocal.includes(p.titulo))
    ];
  };

  useEffect(() => {
    ProductoService.getAllProductosByCategoria("consolas")
      .then((response) => {
        if (response && response.data) {
          setProductos(prev => mergeproductos(response.data, prev));
        } else {
          setProductos(prev => mergeproductos([], prev));
        }
      });
  }, []);

  const agregarProductoLocal = (producto) => {
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    const indiceExistente = carritoActual.findIndex(item => item.titulo === producto.titulo);

    if (indiceExistente !== -1) {
      carritoActual[indiceExistente].cantidad = (carritoActual[indiceExistente].cantidad || 1) + 1;
    } else {
      carritoActual.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carritoActual));
  };

  return (
    <>
      <Navegador />
      <Container className="mt-4">
        <h1 className="mb-4 text-center">Consolas</h1>

        <Row>

          {/* Consolas locales */}
          {consolasLocal.map((c, idx) => (
            <Col key={idx} md={6} lg={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={c.imagen} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>{c.titulo}</Card.Title>
                  <Card.Text>{c.descripcion}</Card.Text>
                  <Card.Text className="fw-bold">{c.precio}</Card.Text>
                  <Button variant="primary" onClick={() => agregarProductoLocal(c)}>
                    Agregar al carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}

          {/* Productos desde la API */}
          {productos.map((c, idx) => (
            <Col key={idx} md={6} lg={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={c.imagen} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>{c.nombre}</Card.Title>
                  <Card.Text>{c.descripcion}</Card.Text>
                  <Card.Text className="fw-bold">{c.precio}</Card.Text>
                  <Button variant="primary" onClick={() => agregarProductoLocal(c)}>
                    Agregar al carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}

        </Row>
      </Container>
      <Footer />
    </>
  );
}
