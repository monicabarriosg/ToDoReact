// Este componente es para la pagina privada donde el sueño de la pagina puede
// Subir los datos que desea ver en us pagina
import { useState } from "react"; // Importación del hook useState de React
// Importacion de la funcion fetchData para manejar las peticiones
import { fetchData } from "../use";
import "../css/CrearProducto.css"; // Importacion de la hoja de estilos
//  
function AddProduct() {
  const [product, setProduct] = useState({
    name: "",        // Almacena el nombre del producto
    price: 0,        //Almacena el dato del precio
    description: "", //Almacena la descripción del producto
    imageUrl: "",    // Almacena la URL de la imagen del producto
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetchData("http://localhost:3001/user", product);
      console.log("Product added:", response);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  return (
    <div className="container-crear">
      <h2 className="h2-addProduct">Add Product</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            className="input-name"
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="input-price"
            required
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            className="input-description"
            required
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleInputChange}
            className="input-image"
            required
          />
        </label>
        <br />
        <button type="submit" className="btn-addProduct">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
