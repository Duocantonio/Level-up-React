import React, { useState } from "react";

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [clave1, setClave1] = useState("");
  const [clave2, setClave2] = useState("");
  const [errores, setErrores] = useState("");
  const [descuento, setDescuento] = useState("");

  const manejarEmail = (email) => {
    setEmail(email);
    if(email.includes("@gmail.com") || email.includes("@duocuc.cl")){
        if (email.includes("@duocuc.cl")) {
            setDescuento("Obtienes un 20% de descuento por ser de DuocUC 🎓");
        } else {
            setDescuento("");
        }
    }else{
        setEmail("Correo no valido, Favor revisar su correo")
    }
  };

  const validarFormulario = (validacion) => {
    validacion.preventDefault();

    if (nombre.length < 3) {
      setErrores("Ingrese mínimo 3 letras.");
      return;
    }

    if (edad < 18) {
      setErrores("Debes ser mayor de edad.");
      return;
    }

    if (!email.includes("@")) {
      setErrores("Añade un signo arroba (@).");
      return;
    }

    if (clave1 !== clave2 || clave2 === "") {
      setErrores("Las claves no coinciden.");
      return;
    }

    setErrores("");
    alert("Felicitaciones, te has registrado con éxito! 🎉");
  };

  return (
    <form
      id="formulario"
      onSubmit={validarFormulario}
      className="flex flex-col gap-3 bg-white p-6 rounded-2xl shadow-md w-full max-w-sm"
    >
      <input
        id="nombres"
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className={`border p-2 rounded ${
          nombre && nombre.length < 3 ? "border-red-500" : "border-gray-300"
        }`}
      />

      <input
        id="edad"
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        className={`border p-2 rounded ${
          edad && edad < 18 ? "border-red-500" : "border-gray-300"
        }`}
      />

      <input
        id="email"
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => manejarEmail(e.target.value)}
        className={`border p-2 rounded ${
          email && !email.includes("@") ? "border-red-500" : "border-gray-300"
        }`}
      />

      {descuento && (
        <div id="descuento" className="text-green-600 font-semibold">
          {descuento}
        </div>
      )}

      <input
        id="clave1"
        type="password"
        placeholder="Contraseña"
        value={clave1}
        onChange={(e) => setClave1(e.target.value)}
        className="border p-2 rounded border-gray-300"
      />

      <input
        id="clave2"
        type="password"
        placeholder="Confirmar contraseña"
        value={clave2}
        onChange={(e) => setClave2(e.target.value)}
        className={`border p-2 rounded ${
          clave2 && clave1 !== clave2 ? "border-red-500" : "border-gray-300"
        }`}
      />

      {errores && (
        <div
          id="errores"
          className="text-red-600 font-semibold text-center mt-2"
        >
          {errores}
        </div>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
      >
        Enviar
      </button>
    </form>
  );
}
