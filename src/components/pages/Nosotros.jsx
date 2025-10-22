import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navegador from '../organisms/Navegador'; // Asegúrate de que esta ruta sea correcta


export default function Nosotros() {


    const customMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.010057757669!2d-70.64337939619806!3d-33.47508891619967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c546426fc94f%3A0xf5043080bf84a821!2sTiendas%20LEVEL%20UP!5e0!3m2!1ses-419!2scl!4v1760750595891!5m2!1ses-419!2scl";

    return (
        <>
            <Navegador />
            
            <Container className="my-5"> 
                <h1 className="text-center mb-5 text-primary">Level-Up Gamer</h1>
                
                <Row className="mb-5 justify-content-center">
                    <Col md={10}>
                        <Card className="shadow-sm border-0">
                            <Card.Body>
                                <Card.Title as="h2" className="text-success border-bottom pb-2 mb-3">¿Quiénes Somos?</Card.Title>
                                <Card.Text>
                                    <p>
                                        **Level-Up Gamer** es una tienda online dedicada a satisfacer las necesidades de los entusiastas de los
                                        videojuegos en Chile. Lanzada hace dos años como respuesta a la creciente demanda durante la
                                        pandemia, ofrecemos una amplia gama de productos para gamers, desde consolas y
                                        accesorios hasta computadores y sillas especializadas. Aunque **no contamos con una ubicación física**,
                                        realizamos despachos a todo el país desde nuestra central de operaciones en Santiago.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                <Row className="mb-5 justify-content-center">
                    <Col md={5} className="mb-4 mb-md-0">
                        <Card className="h-100 border-primary shadow-lg">
                            <Card.Body>
                                <Card.Title as="h3" className="text-center text-info">Nuestra Misión</Card.Title>
                                <Card.Text>
                                    Proporcionar productos de alta calidad para gamers en todo Chile, ofreciendo una experiencia de
                                    compra única y personalizada, con un enfoque en la satisfacción del cliente y el crecimiento de la
                                    comunidad gamer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col md={5}>
                        <Card className="h-100 border-warning shadow-lg">
                            <Card.Body>
                                <Card.Title as="h3" className="text-center text-warning">Nuestra Visión</Card.Title>
                                <Card.Text>
                                    Ser la tienda online líder en productos para gamers en Chile, reconocida por su innovación, servicio
                                    al cliente excepcional, y un programa de fidelización basado en gamificación que recompense a
                                    nuestros clientes más fieles.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>

                <Row className="justify-content-center">
                    <Col md={10}>
                        <h2 className="text-center mb-4 text-secondary">Ubicación de Nuestra Central de Logística (Referencial)</h2>
                        
                        <div style={{ position: 'relative', paddingBottom: '75%', height: 0, overflow: 'hidden' }}>
                            <iframe 
                                src={customMapUrl} 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa de la Central de Operaciones de Level-Up Gamer"
                            ></iframe>
                        </div>

                        <p className="text-center text-muted mt-3 small">
                            Este mapa representa nuestra ubicación logística en Santiago para despachos.
                        </p>
                    </Col>
                </Row>

            </Container>
        </>
    )
}