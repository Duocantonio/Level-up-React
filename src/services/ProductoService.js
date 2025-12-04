import api from '../api/AxiosConfig';

const baseURL='http://localhost:9090/';

class ProductoService {
    getAllProductos() {
        return api.get('/productos');
    }

    getProductoById(id) {
        return api.get(`/productos/${id}`);
    }

    createProducto(producto) {
        return api.post('/productos/createproduc', producto);
    }

    updateProducto(id, producto) {
        return api.put(`/productos/${id}`, producto);
    }
    
    deleteProducto(id) {
        return api.delete(`/productos/${id}`);
    }

    getAllProductosByCategoria(categoria) {
        return api.get(`/productos/getcategoria/${categoria}`);
    }
}

export default new ProductoService();