import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../Style/Footer.css';

export default function Footer() {
    return (   
        <footer className="bg-dark text-white mt-4 p-4">
            <Container>
                <Row className="text-center text-md-start">
                    <Col md={4} className="mb-3">
                        <h5>Level Up</h5>
                        <p>Tu tienda de confianza para videojuegos y consolas.</p>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h5>Contactanos</h5>
                        <ul className="list-unstyled">
                            <li><a href="tel:+56973927107" className="text-white text-decoration-none">+56 9 7392 7107</a></li>
                            <li><a href="/" className="text-white text-decoration-none">contactanos@LevelUp.cl</a></li>
                        </ul>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h5>Síguenos</h5>
                        <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                            <a href="#" className="text-white fs-4"><FaFacebook /></a>
                            <a href="#" className="text-white fs-4"><FaTwitter /></a>
                            <a href="#" className="text-white fs-4"><FaInstagram /></a>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center border-top pt-3">
                        © {new Date().getFullYear()} Level Up. Todos los derechos reservados.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}