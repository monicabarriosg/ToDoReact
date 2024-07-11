
import { useState } from 'react';

function EditProductForm({ product, handleEdit, closeEditForm }) {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(editedProduct);
  };

  return (
    <div className="edit-product-form">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={editedProduct.name}
          onChange={handleInputChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={editedProduct.description}
          onChange={handleInputChange}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={editedProduct.price}
          onChange={handleInputChange}
          required
        />

        <div>
          <button type="submit">Save Changes</button>
          <button type="button" onClick={closeEditForm}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditProductForm;
