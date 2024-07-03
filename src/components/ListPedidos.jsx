
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EliminarPedido from './eliminarProducto';

const ListPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user');
        setPedidos(response.data);
      } catch (error) {
        console.error('Error al obtener pedidos:', error);
      }
    };

    fetchPedidos();
  }, []);

  const handlePedidoEliminado = (pedidoId) => {
    setPedidos(pedidos.filter(pedido => pedido._id !== pedidoId));
  };

  return (
    <div className='container'>
      <h2 className='h2-tittle'>Listado de Pedidos</h2>
      <ul className='list-product'>
        {pedidos.map((pedido) => (
          <li key={pedido._id}>
            <strong>Producto:</strong> {pedido.producto} - <strong>Cantidad:</strong> {pedido.cantidad} - <strong>Cliente:</strong> {pedido.cliente}
            <EliminarPedido pedidoId={pedido._id} onPedidoEliminado={handlePedidoEliminado}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPedidos;

