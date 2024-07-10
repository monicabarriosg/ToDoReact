import { useState } from "react";
// importacion de la funcion fetchData para
import { fetchData } from "../use";
function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    imageUrl: "",
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
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
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
          />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
