import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Container, Alert, Card } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { login as loginService } from "../../services/AuthService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const manejarLogin = async (e) => {
    e.preventDefault();
    setMensaje("");

    try {
      const data = await loginService(email, clave);
      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.usuario));
      localStorage.setItem("roles", JSON.stringify(data.roles));
      localStorage.setItem("isLoggedIn", "true");

      login(data.usuario.email, data.roles);

      if (data.roles.includes("ADMIN")) {
        navigate("/ProductosAdmin");
      } else {
        navigate("/");
      }

    } catch (err) {
      setMensaje(err.response?.data?.message || "Correo o contraseña incorrectos.");
    }
  };
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Card style={{ width: "24rem", padding: "20px" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Iniciar Sesión</Card.Title>
          {mensaje && <Alert variant="danger">{mensaje}</Alert>}

          <Form onSubmit={manejarLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit" className="w-100 mt-2" variant="primary">
              Iniciar Sesión
            <Link></Link>
            </Button>

            <div className="text-center mt-3">
              <Link to="/Crear_cuenta">¿No tienes cuenta? Crear una</Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
