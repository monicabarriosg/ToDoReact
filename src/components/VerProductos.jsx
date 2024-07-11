
import { useState, useEffect } from "react";
import { getData } from "../use";
import "../css/ProductosCards.css";
import Filtro from "../components/Filtro"; // Importa el componente de filtro

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filtro, setFiltro] = useState(""); // Estado para el término de búsqueda

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

  // Función para manejar la búsqueda
  const buscar = () => {
    // Filtrar productos por nombre según el término de búsqueda
    const resultados = products.filter(product =>
      product.name.toLowerCase().includes(filtro.toLowerCase())
    );
    setProducts(resultados); // Actualizar lista de productos filtrados
  };

  return (
    <div className="product-list">
      <h2>Productos</h2>
      <Filtro filtro={filtro} setFiltro={setFiltro} buscar={buscar} /> {/* Renderiza el componente de filtro */}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
