import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Consolas from './Consolas';

jest.mock('../organisms/Navegador', () => () => <div data-testid="navegador-mock" />);

jest.mock('../../assets/Logos/Xbox_Series_X.png', () => 'Xbox_Series_X.png');
jest.mock('../../assets/Logos/PS5.png', () => 'PS5.png');
jest.mock('../../assets/Logos/Nintendo_Switch.jpg', () => 'Nintendo_Switch.jpg');
jest.mock('../../assets/Logos/Steam_Deck.jpg', () => 'Steam_Deck.jpg');


describe('Componente Consolas', () => {
  beforeEach(() => {
    Storage.prototype.getItem = jest.fn(() => '[]');
    Storage.prototype.setItem = jest.fn();
  });

  test('renderiza el título "Consolas"', () => {
    render(<Consolas />);
    expect(screen.getByText('Consolas')).toBeInTheDocument();
  });

  test('renderiza todas las consolas', () => {
    render(<Consolas />);
    expect(screen.getByText('Xbox Series X')).toBeInTheDocument();
    expect(screen.getByText('PlayStation 5')).toBeInTheDocument();
    expect(screen.getByText('Nintendo Switch')).toBeInTheDocument();
    expect(screen.getByText('Steam Deck')).toBeInTheDocument();
  });

  test('muestra los precios correctos', () => {
    render(<Consolas />);
    expect(screen.getAllByText('$499.990')).toHaveLength(2);
    expect(screen.getByText('$299.990')).toBeInTheDocument();
    expect(screen.getByText('$399.990')).toBeInTheDocument();
  });
});