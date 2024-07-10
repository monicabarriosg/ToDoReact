import { useState, useEffect } from "react";
import { getData, deleteData } from "../use";
import "../css/ProductosCards.css";
function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseData = await getData("http://localhost:3001/user");
        setProducts(responseData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await deleteData("http://localhost:3001/user", id);
      console.log("Product deleted:", response);

      // Actualizar la lista de productos después de eliminar
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
      // Manejar el error: mostrar un mensaje de error o hacer algo adecuado
    }
  };

  return (
    <div className="product-list">
      {/*  */}
      <h2>productos </h2>
      <div className="card-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img
              src={product.imageUrl}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-price">${product.price}</p>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(product.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
