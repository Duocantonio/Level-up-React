import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Crear_Cuenta from "./Crear_Cuenta.jsx";
import { MemoryRouter } from 'react-router-dom';


describe("Componente Registro", () => {
 it("muestra error si el nombre tiene menos de 3 letras", () => {
    render(<MemoryRouter>
              <Crear_Cuenta />       
          </MemoryRouter>);

  const inputNombre = screen.getByPlaceholderText("Ingresa tu nombre");
  const boton = screen.getByText("Registrarse");
  fireEvent.change(inputNombre, { target: { value: "Jo" } });
  fireEvent.click(boton);

 expect(screen.getByText("Ingrese mínimo 3 letras.")).toBeInTheDocument();
 });

 it("muestra error si el usuario es menor de edad", () => {
 render(<MemoryRouter>
  <Crear_Cuenta />       
</MemoryRouter>);


 fireEvent.change(screen.getByPlaceholderText("Ingresa tu nombre"), { target: { value: "Jose" } });
 fireEvent.change(screen.getByPlaceholderText("Edad"), { target: { value: 17 } });
 
  fireEvent.change(screen.getByPlaceholderText("ejemplo@gmail.com o @duocuc.cl"), { target: { value: "jose@gmail.com" } });
  fireEvent.click(screen.getByText("Registrarse"));

  expect(screen.getAllByText("Debes ser mayor de edad.")).toHaveLength(2);
 });

 it("muestra mensaje de descuento si el correo es de duocuc.cl", () => {
  render(<MemoryRouter>
        <Crear_Cuenta />       
      </MemoryRouter>);
  fireEvent.change(screen.getByPlaceholderText("ejemplo@gmail.com o @duocuc.cl"), {
   target: { value: "alumno@duocuc.cl" }
  });

  expect(
   screen.getByText("🎓 Obtienes un 20% de descuento por ser de DuocUC")
  ).toBeInTheDocument();
 });

 it("muestra error si las contraseñas no coinciden", () => {
  render(<MemoryRouter>
            <Crear_Cuenta />       
        </MemoryRouter>);

  fireEvent.change(screen.getByPlaceholderText("Ingresa tu nombre"), { target: { value: "Juan" } });
  fireEvent.change(screen.getByPlaceholderText("Edad"), { target: { value: 25 } });
  fireEvent.change(screen.getByPlaceholderText("ejemplo@gmail.com o @duocuc.cl"), { target: { value: "juan@gmail.com" } });
  fireEvent.change(screen.getByPlaceholderText("Contraseña"), { target: { value: "1234" } });
  fireEvent.change(screen.getByPlaceholderText("Confirmar contraseña"), { target: { value: "abcd" } });
  fireEvent.click(screen.getByText("Registrarse"));

  expect(screen.getAllByText("Las claves no coinciden.")).toHaveLength(2);

 });
});