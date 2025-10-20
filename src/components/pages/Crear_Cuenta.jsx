import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 

export default function Crear_Cuenta() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [clave1, setClave1] = useState("");
  const [clave2, setClave2] = useState("");
  const [errores, setErrores] = useState("");
  const [descuento, setDescuento] = useState("");

  const navigate = useNavigate(); 

  const manejarEmail = (email) => {
    setEmail(email);
    if (email.includes("@duocuc.cl")) {
      setDescuento("🎓 Obtienes un 20% de descuento por ser de DuocUC");
    } else {
      setDescuento("");
    }
  };

  const validarFormulario = (e) => {
    e.preventDefault();
    setErrores("");

    if (nombre.length < 3) {
      setErrores("Ingrese mínimo 3 letras.");
      return;
    }
    if (edad < 18) {
      setErrores("Debes ser mayor de edad.");
      return;
    }
    if (!email.includes("@gmail.com") && !email.includes("@duocuc.cl")) {
      setErrores("Añade un correo válido (@gmail.com o @duocuc.cl).");
      return;
    }
    if (clave1 !== clave2 || clave2 === "") {
      setErrores("Las claves no coinciden.");
      return;
    }

    localStorage.setItem(
      "usuario",
      JSON.stringify({ nombre, edad, email, clave: clave1 })
    );

    alert("🎉 Felicitaciones, te has registrado con éxito!");
    navigate("/");
  };

  return (
    <Container className="my-5 p-4 border rounded shadow" style={{ maxWidth: '450px' }}>
      <h2 className="text-center mb-4">Crear Cuenta</h2>
      
      <Form onSubmit={validarFormulario}>
        {errores && <Alert variant="danger" className="text-center">{errores}</Alert>}

        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            isInvalid={nombre && nombre.length < 3}
          />
          <Form.Control.Feedback type="invalid">
            Mínimo 3 letras.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEdad">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="number"
            placeholder="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            isInvalid={edad && edad < 18}
          />
          <Form.Control.Feedback type="invalid">
            Debes ser mayor de edad.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="ejemplo@gmail.com o @duocuc.cl"
            value={email}
            onChange={(e) => manejarEmail(e.target.value)}
          />
        </Form.Group>

        {descuento && <Alert variant="success">{descuento}</Alert>}

        <Form.Group className="mb-3" controlId="formClave1">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={clave1}
            onChange={(e) => setClave1(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formClave2">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirmar contraseña"
            value={clave2}
            onChange={(e) => setClave2(e.target.value)}
            isInvalid={clave2 && clave1 !== clave2}
          />
          <Form.Control.Feedback type="invalid">
            Las claves no coinciden.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-3">
          Crear Cuenta
        </Button>
      </Form>
    </Container>
  );
}
