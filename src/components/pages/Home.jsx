import React from 'react';
import Xbox_Series_X from '../../assets/Logos/Xbox_Series_X.png'; 
import Nvidia5090 from '../../assets/Logos/Nvidia5090.png';
import PS5 from '../../assets/Logos/PS5.png';
import Navegador from '../organisms/Navegador';
import Footer from '../organisms/Footer';
import { Container, Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import '../Style/Home.css';




export default function Home({ agregarAlCarrito }) {
  const sections = [
    {
      title: 'Consolas',
      items: [
        { imagen: Xbox_Series_X, titulo: 'Xbox Series X', descripcion: 'La consola más potente de Xbox hasta la fecha.', precio: '$499.990' },
        { imagen: PS5, titulo: 'PlayStation 5', descripcion: 'La consola de última generación de Sony.', precio: '$499.990' }
      ]
    },
    {
      title: 'Juegos de Mesa',
      items: [
        { imagen: Catan, titulo: 'Catan', descripcion: 'Juego de estrategia para 3-4 jugadores.', precio: '$29.990' },
        { imagen: Carcassonne, titulo: 'Carcassonne', descripcion: 'Juego de colocación de losetas, fácil de aprender.', precio: '$24.990' }
      ]
    },
    {
      title: 'Periféricos',
      items: [
        { imagen: Razer_Kraken, titulo: 'Auriculares Razer Kraken', descripcion: 'Sonido envolvente y micrófono con cancelación.', precio: '$59.990' },
        { imagen: Teclado_kurama, titulo: 'Teclado Kumara', descripcion: 'Interruptores táctiles y retroiluminación RGB.', precio: '$49.990' }
      ]
    },
    {
      title: 'Computadores',
      items: [
        { imagen: Pc_Gamer_2, titulo: 'Computador Gamer Avanzado', descripcion: 'Un computador potente para juegos AAA, con una tarjeta gráfica de alta gama y un procesador rápido.', precio: '$1.299.990' },
        { imagen: Laptop_Gamer, titulo: 'Laptop Gamer', descripcion: 'Una laptop diseñada para gamers, con una pantalla de alta frecuencia de actualización y un diseño portátil.', precio: '$999.990' }
      ]
    }
  ];

  return (
    <>
      <Navegador />
      <Container className="mt-4 home-page">
        <h1 className="text-center mb-4">Bienvenido a Level-Up Store</h1>

        {/* Carousel que muestra 1 producto a la vez cada 5 segundos */}
        <Carousel className="home-carousel" interval={5000} controls indicators>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Card className="mb-4">
                <Card.Img variant="top" src={Xbox_Series_X} style={{ height: 200, objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>Xbox Series X</Card.Title>
                  <Card.Text>La consola más potente de Xbox hasta la fecha, con un rendimiento excepcional.</Card.Text>
                  <Card.Text className="fw-bold">$499.990</Card.Text>
                  <Button className="btn-add" variant="primary" onClick={() => agregarAlCarrito({ titulo: 'Xbox Series X', precio: '$499.990', imagen: Xbox_Series_X })}>
                    Agregar al carrito
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Card className="mb-4">
                <Card.Img variant="top" src={Nvidia5090} style={{ height: 200, objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>Nvidia RTX 5090</Card.Title>
                  <Card.Text>La tarjeta gráfica más potente de Nvidia, diseñada para gamers y creadores.</Card.Text>
                  <Card.Text className="fw-bold">$1.499.990</Card.Text>
                  <Button className="btn-add" variant="primary" onClick={() => agregarAlCarrito({ titulo: 'Nvidia RTX 5090', precio: '$1.499.990', imagen: Nvidia5090 })}>
                    Agregar al carrito
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Card className="mb-4">
                <Card.Img variant="top" src={PS5} style={{ height: 200, objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>PlayStation 5</Card.Title>
                  <Card.Text>La consola de última generación de Sony, con un rendimiento impresionante.</Card.Text>
                  <Card.Text className="fw-bold">$499.990</Card.Text>
                  <Button className="btn-add" variant="primary" onClick={() => agregarAlCarrito({ titulo: 'PlayStation 5', precio: '$499.990', imagen: PS5 })}>
                    Agregar al carrito
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>

        {/* Secciones estáticas: 2 productos por sección */}
        {sections.map((sec, sIdx) => (
          <section key={sIdx} className="mt-5 home-section">
            <h3 className="mb-3">{sec.title}</h3>
            <Row className="static-row">
              {sec.items.map((it, idx) => (
                <Col key={idx} md={6} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={it.imagen} style={{ height: 200, objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title>{it.titulo}</Card.Title>
                      <Card.Text>{it.descripcion}</Card.Text>
                      <Card.Text className="fw-bold">{it.precio}</Card.Text>
                      <Button className="btn-add" variant="primary" onClick={() => agregarAlCarrito({ titulo: it.titulo, precio: it.precio, imagen: it.imagen })}>
                        Agregar al carrito
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>
        ))}

        <section id="reviewofproduct" className="mt-5"></section>
      </Container>
      <Footer />
    </>
  );
}