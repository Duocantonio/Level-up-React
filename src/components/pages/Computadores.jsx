import React from 'react';
import Navegador from '../organisms/Navegador';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import PC_Gamer_1 from '../../assets/Logos/PC_Gamer_1.jpg';
import PC_Gamer_2 from '../../assets/Logos/PC_Gamer_2.webp';
import Laptop_Gamer from '../../assets/Logos/Laptop_Gamer.webp';
import PC_Streaming from '../../assets/Logos/PC_Streaming.webp';
import Footer from "../organisms/Footer";


const computadores = [

  {
    imagen: PC_Gamer_1,
    titulo: "Computador Gamer Basico",
    descripcion: "Un computador ideal para iniciarte en el mundo del gaming, con componentes de calidad y precio accesible.",
    precio: "$599.990"
  },

  {
    imagen: PC_Gamer_2,
    titulo: "Computador Gamer Avanzado",
    descripcion: "Un computador potente para juegos AAA, con una tarjeta gráfica de alta gama y un procesador rápido.",
    precio: "$1.299.990"
  },

  {
    imagen: Laptop_Gamer,
    titulo: "Laptop Gamer",
    descripcion: "Una laptop diseñada para gamers, con una pantalla de alta frecuencia de actualización y un diseño portátil.",
    precio: "$999.990"
  },
  
  {
    imagen: PC_Streaming,
    titulo: "Computador para Streaming",
    descripcion: "Un computador optimizado para streaming, con capacidad para manejar múltiples tareas simultáneamente.",
    precio: "$1.499.990"
  }

];

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


export default function Computadores() {
  return (
    <>
      <Navegador />
      <Container className="mt-4">
        <h1 className="mb-4 text-center">Computadores</h1>
        <Row>
          {computadores.map((c, idx) => (
            <Col key={idx} md={6} lg={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={c.imagen} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>{c.titulo}</Card.Title>
                  <Card.Text>{c.descripcion}</Card.Text>
                  <Card.Text className="fw-bold">{c.precio}</Card.Text>
                  <Button variant="dark" onClick={() => agregarProductoLocal(c)}>
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