// Archivo: FunCarritoSimple.spec.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FunCarrito from './FunCarrito'; 
import React from 'react';

const mockSetItem = jest.fn();
const mockGetItem = jest.fn();



const mockCarritoInicial = [
    { titulo: 'Teclado Gamer', precio: '$10.000', cantidad: 2, imagen: 'img1.jpg' },
    { titulo: 'Mouse Pad XL', precio: '$5.500', cantidad: 1, imagen: 'img2.jpg' },
];


beforeEach(() => {
    global.Storage.prototype.setItem = mockSetItem;
    global.Storage.prototype.getItem = mockGetItem;
    
    mockGetItem.mockReturnValue(JSON.stringify(mockCarritoInicial));
});


afterEach(() => {
    jest.clearAllMocks();
});


describe('Componente Carrito de Compras (FunCarritoSimple)', () => {

    it('debería cargar y mostrar los productos y cantidades del carrito', () => {
        render(<FunCarrito />);
        expect(screen.getByText('Teclado Gamer (x2)')).toBeInTheDocument();
        expect(screen.getByText('Mouse Pad XL (x1)')).toBeInTheDocument();
    });


    it('debería calcular el total base y aplicar el descuento DuocUC (20%)', () => {
        render(<FunCarrito />);
                
        expect(screen.getByText('Total: $25.500', { selector: 'strong' })).toBeInTheDocument();
        
        expect(screen.getByText('Descuento DUOC (20%): -$5.100')).toBeInTheDocument();
        
        expect(screen.getByText('Total con descuento: $20.400', { selector: 'strong' })).toBeInTheDocument();
    });
    

    it('debería disminuir la cantidad del producto al hacer clic en Eliminar si hay más de uno', () => {
        render(<FunCarrito />);
        
        const botonesEliminar = screen.getAllByRole('button', { name: /Eliminar/i });
        fireEvent.click(botonesEliminar[0]); 
        
        expect(screen.getByText('Teclado Gamer (x1)')).toBeInTheDocument();
        
        expect(mockSetItem).toHaveBeenCalled();
    });

    it('debería eliminar completamente el producto si su cantidad es 1', () => {
        render(<FunCarrito />);
        
        const botonesEliminar = screen.getAllByRole('button', { name: /Eliminar/i });
        fireEvent.click(botonesEliminar[1]); 
        
        expect(screen.queryByText('Mouse Pad XL (x1)')).not.toBeInTheDocument();
        
        const updatedCarrito = JSON.parse(mockSetItem.mock.calls[mockSetItem.mock.calls.length - 1][1]);
        expect(updatedCarrito).toHaveLength(1);
    });
    

    it('debería mostrar mensaje de carrito vacío si no hay productos', () => {
        mockGetItem.mockReturnValue(null); 
        
        render(<FunCarrito />);
        
        expect(screen.getByText('El carrito está vacío.')).toBeInTheDocument();
        expect(screen.queryByText(/Total/i)).not.toBeInTheDocument();
    });
});