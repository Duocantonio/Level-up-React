import React from "react";
import Navegador from "../organisms/Navegador";
import Catan from '../../assets/Logos/Catan.jpg';
import Monopoly from '../../assets/Logos/Monopoly.jpg';
import Risk from '../../assets/Logos/Risk.webp';
import Carcassonne from '../../assets/Logos/Carcassonne.webp';
import Dixit from '../../assets/Logos/Dixit.jpg';
import { Container, Row, Col, Card, Button } from "react-bootstrap";


const juegosMesa = [
  {
    imagen: Catan,
    titulo: "Catan",
    descripcion: "Un juego de estrategia y comercio donde los jugadores compiten por colonizar una isla, construir caminos y comerciar recursos",
    precio: "$39.990"
  },
  {
    imagen: Monopoly,
    titulo: "Monopoly",
    descripcion: "El clásico juego de bienes raíces donde los jugadores compran, venden y negocian propiedades para convertirse en el jugador más rico.",
    precio: "$29.990"
  },
  {
    imagen: Dixit,
    titulo: "Dixit",
    descripcion: "Un juego de cartas ilustradas donde los jugadores usan su imaginación para contar historias y adivinar las cartas de los demás.",
    precio: "$24.990"
  },
  {
    imagen: Risk,
    titulo: "Risk",
    descripcion: "Un juego de estrategia militar donde los jugadores luchan por el control del mundo mediante la conquista de territorios y la gestión de ejércitos.",
    precio: "$34.990"
  },
  {
    imagen: Carcassonne,
    titulo: "Carcassonne",
    descripcion: "Un juego de colocación de losetas donde los jugadores construyen un paisaje medieval con ciudades, caminos y campos, y compiten por el control de estas áreas.",
    precio: "$29.990"
  }
];

function agregarAlCarrito(producto) {
  const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
  carritoActual.push(producto);
  localStorage.setItem('carrito', JSON.stringify(carritoActual));
  alert(`${producto.titulo} se ha añadido al carrito 🛒`);
}

export default function Juegos_Mesa() {
  return (
    <>
      <Navegador />
      <Container className="mt-4">
        <h1 className="mb-4 text-center">Juegos de Mesa</h1>
        <Row>
          {juegosMesa.map((j, idx) => (
            <Col key={idx} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={j.imagen} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>{j.titulo}</Card.Title>
                  <Card.Text>{j.descripcion}</Card.Text>
                  <Card.Text className="fw-bold">{j.precio}</Card.Text>
                  <Button variant="success" onClick={() => agregarAlCarrito(j)}>
                    Agregar al carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}