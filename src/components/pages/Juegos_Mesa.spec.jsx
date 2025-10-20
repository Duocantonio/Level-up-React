import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}

jest.mock('../organisms/Navegador', () => () => <div data-testid="navegador-mock" />);

jest.mock('../../assets/Logos/Catan.jpg', () => 'Catan.jpg');
jest.mock('../../assets/Logos/Monopoly.jpg', () => 'Monopoly.jpg');
jest.mock('../../assets/Logos/Dixit.jpg', () => 'Dixit.jpg');
jest.mock('../../assets/Logos/Risk.webp', () => 'Risk.webp');
jest.mock('../../assets/Logos/Carcassonne.webp', () => 'Carcassonne.webp');

import JuegosDeMesa from './Juegos_Mesa';

describe('Componente Juegos_Mesa', () => {
  beforeEach(() => {
    Storage.prototype.getItem = jest.fn(() => '[]');
    Storage.prototype.setItem = jest.fn();
  });

  test('renderiza el título "Juegos_Mesa"', () => {
    render(<JuegosDeMesa />);
    expect(screen.getByText(/Juegos/i)).toBeInTheDocument();
  });

  test('renderiza varios juegos', () => {
    render(<JuegosDeMesa />);
    expect(screen.getByText('Catan')).toBeInTheDocument();
    expect(screen.getByText('Monopoly')).toBeInTheDocument();
    expect(screen.getByText('Dixit')).toBeInTheDocument();
    expect(screen.getByText('Risk')).toBeInTheDocument();
    expect(screen.getByText('Carcassonne')).toBeInTheDocument();
  });

  test('muestra precios y agrega al carrito', () => {
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<JuegosDeMesa />);

    const boton = screen.getAllByText('Agregar al carrito')[0];
    fireEvent.click(boton);

    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.getItem).toHaveBeenCalledWith('carrito');

    expect(mockAlert).toHaveBeenCalled();
    mockAlert.mockRestore();
  });
});