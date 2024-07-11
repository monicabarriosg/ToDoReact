// este componente es para que el administrador pueda ver los productos subidos en la pagina 
//y los pueda eliminar
import { useState, useEffect } from 'react';
// importacion del metodo GET y DELETE
import { getData, deleteData } from '../use';

function ProductListWithDelete() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseData = await getData("http://localhost:3001/user");
        // actualiza los datos subidos 
        setProducts(responseData); 
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
    // asegura que useEffect se ejecute solo una vez al montar el componente
  }, []); 

  const handleDelete = async (id) => {
    try {
      const response = await deleteData("http://localhost:3001/user", id);
      console.log('Product deleted:', response);

      // Actualizar la lista de productos después de eliminar
      const updatedProducts = products.filter(product => product.id !== id);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
      // Manejar el error: mostrar un mensaje de error o hacer algo adecuado
    }
  };

  return (
    <div>
      <h2>Product List with Delete</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price}
            <p>{product.description}</p>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListWithDelete;
