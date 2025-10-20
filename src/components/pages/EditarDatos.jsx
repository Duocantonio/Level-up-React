import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Cambiar_Datos() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario) {
      setNombre(usuario.nombre);
      setEdad(usuario.edad);
      setEmail(usuario.email);
      setClave(usuario.clave);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const manejarGuardar = (e) => {
    e.preventDefault();

    if (!nombre || !edad || !email || !clave) {
      setMensaje("Completa todos los campos.");
      return;
    }

    localStorage.setItem(
      "usuario",
      JSON.stringify({ nombre, edad, email, clave })
    );
    setMensaje("Datos actualizados correctamente ✅");
  };

  const cerrarSesion = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Card style={{ width: "28rem", padding: "20px" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Editar Mis Datos</Card.Title>
          {mensaje && <Alert variant="info">{mensaje}</Alert>}

          <Form onSubmit={manejarGuardar}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="number"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
              />
            </Form.Group>

            <div className="d-flex justify-content-between mt-3">
              <Button type="submit" variant="success">
                Guardar Cambios
              </Button>
              <Button variant="danger" onClick={cerrarSesion}>
                Cerrar Sesión
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
