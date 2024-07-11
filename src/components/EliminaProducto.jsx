import { useState, useEffect } from 'react';
import { getData, deleteData, putData } from '../use'; 
import FormularioEditar from '../components/FormularioEditar'; 

function EliminarEditarProductos() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseData = await getData("http://localhost:3001/user");
        setProducts(responseData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await deleteData("http://localhost:3001/user", id);
      console.log('Product deleted:', response);


      const updatedProducts = products.filter(product => product.id !== id);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const openEditForm = (product) => {
    setEditingProduct(product);
  };

  const closeEditForm = () => {
    setEditingProduct(null);
  };

  const handleEdit = async (updatedProductData) => {
    try {
      const response = await putData("http://localhost:3001/user", editingProduct.id, updatedProductData);
      console.log('Product updated:', response);


      const updatedProducts = products.map(product =>
        product.id === editingProduct.id ? { ...product, ...updatedProductData } : product
      );
      setProducts(updatedProducts);
      setEditingProduct(null); // Limpiar el estado de edición después de editar
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      <h2>Product List with Delete and Edit</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price}
            <p>{product.description}</p>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
            <button onClick={() => openEditForm(product)}>Edit</button>
          </li>
        ))}
      </ul>

      {/* Formulario de Edición */}
      {editingProduct && (
        <FormularioEditar
          product={editingProduct}
          handleEdit={handleEdit}
          closeEditForm={closeEditForm}
        />
      )}
    </div>
  );
}

export default EliminarEditarProductos;
