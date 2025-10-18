import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

if (typeof global.TextEncoder === 'undefined') {
    global.TextEncoder = TextEncoder;
}

jest.mock('../organisms/Navegador', () => () => <div data-testid="navegador-mock" />);

jest.mock('../../assets/Logos/PC_Gamer_1.jpg', () => 'PC_Gamer_1.jpg');
jest.mock('../../assets/Logos/PC_Gamer_2.webp', () => 'PC_Gamer_2.webp');
jest.mock('../../assets/Logos/Laptop_Gamer.webp', () => 'Laptop_Gamer.webp');
jest.mock('../../assets/Logos/PC_Streaming.webp', () => 'PC_Streaming.webp');

import Computadores from './Computadores';

describe('Componente Computadores', () => {
  beforeEach(() => {
    Storage.prototype.getItem = jest.fn(() => '[]');
    Storage.prototype.setItem = jest.fn();
  });

  test('renderiza el título "Computadores"', () => {
    render(<Computadores />);
    expect(screen.getByText('Computadores')).toBeInTheDocument();
  });

  test('renderiza todos los computadores', () => {
    render(<Computadores />);
    expect(screen.getByText('Computador Gamer Basico')).toBeInTheDocument();
    expect(screen.getByText('Computador Gamer Avanzado')).toBeInTheDocument();
    expect(screen.getByText('Laptop Gamer')).toBeInTheDocument();
    expect(screen.getByText('Computador para Streaming')).toBeInTheDocument();
  });

  test('muestra los precios correctos', () => {
    render(<Computadores />);
    expect(screen.getByText('$599.990')).toBeInTheDocument();
    expect(screen.getByText('$1.299.990')).toBeInTheDocument();
    expect(screen.getByText('$999.990')).toBeInTheDocument();
    expect(screen.getByText('$1.499.990')).toBeInTheDocument();
  });

  test('agrega producto al carrito y muestra alert', () => {
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<Computadores />);

    const primerBoton = screen.getAllByText('Agregar al carrito')[0];
    fireEvent.click(primerBoton);

    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.getItem).toHaveBeenCalledWith('carrito');
    expect(mockAlert).toHaveBeenCalledWith('Computador Gamer Basico se ha añadido al carrito 🛒');

    mockAlert.mockRestore();
  });
});