// este componete es para enlistar los pedidos que el usuario hizo a la pagina

import { useEffect, useState } from 'react';
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
    <div className='container-listPedidos'>
      <h2 className='h2-listPedidos'>Listado de Pedidos</h2>
      <ul className='ul-product'>
        {pedidos.map((pedido) => (
          <li key={pedido._id} className='li-listPedidos'>
            <strong className='producto-listPedidos'>Producto:</strong> {pedido.producto} - <strong className='cantidad-listPedidos'>Cantidad:</strong> {pedido.cantidad} - <strong className='cliente-listPedidos'>Cliente:</strong> {pedido.cliente}
            <EliminarPedido pedidoId={pedido._id} onPedidoEliminado={handlePedidoEliminado} className="btnEliminar-listPedidos"/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPedidos;

