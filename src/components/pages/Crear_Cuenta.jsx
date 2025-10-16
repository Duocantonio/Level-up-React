import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// Importamos los componentes clave de React-Bootstrap
import { Form, Button, Container, Alert } from 'react-bootstrap'; 

export default function Crear_Cuenta() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [clave1, setClave1] = useState("");
  const [clave2, setClave2] = useState("");
  const [errores, setErrores] = useState("");
  const [descuento, setDescuento] = useState("");

  const manejarEmail = (email) => {
    setEmail(email);
    // Lógica para aplicar descuento si el email es de DuocUC
    if (email.includes("@duocuc.cl")) {
      setDescuento("Obtienes un 20% de descuento por ser de DuocUC 🎓");
    } else {
      setDescuento("");
    }
  };

  const validarFormulario = (validacion) => {
    validacion.preventDefault();
    setErrores(""); // Limpiamos errores al inicio de la validación

    // Validación: Nombre mínimo 3 letras
    if (nombre.length < 3) {
      setErrores("Ingrese mínimo 3 letras.");
      return;
    }
    // Validación: Mayor de edad
    if (edad < 18) {
      setErrores("Debes ser mayor de edad.");
      return;
    }
    // Validación: Dominio de correo permitido
    if (!email.includes("@gmail.com") && !email.includes("@duocuc.cl")) {
      setErrores("Añade un correo válido (@gmail.com o @duocuc.cl).");
      return;
    }
    // Validación: Claves deben coincidir
    if (clave1 !== clave2 || clave2 === "") {
      setErrores("Las claves no coinciden.");
      return;
    }

    // Si todas las validaciones pasan
    alert("Felicitaciones, te has registrado con éxito! 🎉");
    // Redirección usando react-router-dom
    navigate("/");
  };

  return (
    // Container: Componente de Bootstrap que ayuda con el centrado y el margen
    <Container className="my-5 p-4 border rounded shadow" style={{ maxWidth: '450px' }}>
      <h2 className="text-center mb-4">Crear Cuenta</h2>
      
      {/* Form: Componente que maneja el envío */}
      <Form onSubmit={validarFormulario}>
        
        {/* Alert: Muestra errores generales de validación si existen */}
        {errores && <Alert variant="danger" className="text-center">{errores}</Alert>}

        {/* Campo Nombre */}
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            // isInvalid activa los estilos de error de Bootstrap
            isInvalid={nombre && nombre.length < 3} 
          />
          <Form.Control.Feedback type="invalid">
            Mínimo 3 letras.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Campo Edad */}
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

        {/* Campo Email */}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="ejemplo@gmail.com o @duocuc.cl"
            value={email}
            onChange={(e) => manejarEmail(e.target.value)}
          />
        </Form.Group>

        {/* Alert: Muestra el mensaje de descuento si aplica */}
        {descuento && <Alert variant="success">{descuento}</Alert>}

        {/* Campo Contraseña 1 */}
        <Form.Group className="mb-3" controlId="formClave1">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={clave1}
            onChange={(e) => setClave1(e.target.value)}
          />
        </Form.Group>

        {/* Campo Contraseña 2 */}
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

        {/* Button: Botón de envío con estilos de Bootstrap */}
        <Button variant="primary" type="submit" className="w-100 mt-3">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}