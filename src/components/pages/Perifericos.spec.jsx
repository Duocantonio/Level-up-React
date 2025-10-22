import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Perifericos from './Perifericos';


jest.mock('../organisms/Navegador', () => () => <div data-testid="navegador-mock" />);
jest.mock('../../assets/Logos/Raton_logi.webp', () => 'Raton_logi.webp');
jest.mock('../../assets/Logos/Teclado_kurama.jpg', () => 'Teclado_kurama.jpg');
jest.mock('../../assets/Logos/Razer_Kraken.jpeg', () => 'Razer_Kraken.jpeg');
jest.mock('../../assets/Logos/LG_4K_180hz.jpg', () => 'LG_4K_180hz.jpg');
jest.mock('../../assets/Logos/Webcam_HD.webp', () => 'Webcam_HD.webp');
jest.mock('../../assets/Logos/Alfombrilla_Razer_XXL.webp', () => 'Alfombrilla_Razer_XXL.webp');
jest.mock('../../assets/Logos/Mando_Xbox_Series_X.png', () => 'Mando_Xbox_Series_X.png');


describe('Componente Perifericos', () => {
  beforeEach(() => {
    Storage.prototype.getItem = jest.fn(() => '[]');
    Storage.prototype.setItem = jest.fn();
  });

 test('renderiza el título "Periféricos"', () => {
  render(<Perifericos />);
  expect(screen.getByText('Periféricos')).toBeInTheDocument();
});

  test('renderiza varios perifericos', () => {
    render(<Perifericos />);
    expect(screen.getByText('Ratón Gamer Logitech G502')).toBeInTheDocument();
    expect(screen.getByText('Teclado Mecánico Kurama')).toBeInTheDocument();
    expect(screen.getByText('Auriculares Razer Kraken')).toBeInTheDocument();
    expect(screen.getByText('Monitor LG 4K 180Hz')).toBeInTheDocument();
    expect(screen.getByText('Webcam HD')).toBeInTheDocument();
    expect(screen.getByText('Alfombrilla Razer XXL')).toBeInTheDocument();
    expect(screen.getByText('Mando Xbox Series X')).toBeInTheDocument();
  });

  test('muestra precios y agrega al carrito', () => {
    render(<Perifericos />);

    const boton = screen.getAllByText('Agregar al carrito')[0];
    fireEvent.click(boton);

    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.getItem).toHaveBeenCalledWith('carrito');
  });
});