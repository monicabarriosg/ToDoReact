import React, { useState } from 'react';
import "../css/Product.css"
import axios from 'axios'; 

const CreatePedido = () => {
  const [pedidoData, setPedidoData] = useState({
    producto: '',
    cantidad: 1,
    cliente: '',
    direccionEnvio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPedidoData({ ...pedidoData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/user", pedidoData);
      console.log('Pedido creado:', response.data);
      alert("siii")
    } catch (error) {
      console.error('Error al crear pedido:', error);
     alert("nooo")
    }
  };

  return (
    <div className='container-createPedido'>
      <h2 className='h2-createPedido'>Crear Nuevo Pedido</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="producto">Producto:</label>
          <input
            type="text"
            id="producto"
            name="producto"
            value={pedidoData.producto}
            onChange={handleChange}
            required
            className='input-createPedido'
          />
        </div>
        <div>
          <label htmlFor="cantidad">Cantidad:</label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            value={pedidoData.cantidad}
            onChange={handleChange}
            min="1"
            className='input-createPedido'
            required
          />
        </div>
        <div>
          <label htmlFor="cliente">Cliente:</label>
          <input
            type="text"
            id="cliente"
            name="cliente"
            value={pedidoData.cliente}
            onChange={handleChange}
              className='input-createPedido'
            required
          />
        </div>
        <div>
          <label htmlFor="direccionEnvio">Dirección de Envío:</label>
          <textarea
            id="direccionEnvio"
            name="direccionEnvio"
            value={pedidoData.direccionEnvio}
            onChange={handleChange}
              className='input-createPedido'
            required
          />
        </div>
        <button type="submit"   className='button-createPedido'>Crear Pedido</button>
      </form>
    </div>
  );
};

export default CreatePedido;
