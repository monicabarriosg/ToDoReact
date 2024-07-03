
import axios from 'axios';

const EliminarPedido = ({ pedidoId, onPedidoEliminado }) => {
  const handleEliminarPedido = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/user/${pedidoId}`);
      if (response.status === 200) {
        onPedidoEliminado(pedidoId);
        alert('Pedido eliminado correctamente');
      } else {
        alert('Hubo un problema al eliminar el pedido');
      }
    } catch (error) {
      console.error('Error al eliminar pedido:', error);
      alert('Hubo un problema al eliminar el pedido');
    }
  };

  return (
    <button onClick={handleEliminarPedido} className='button-delete'>Eliminar</button>
  );
};

export default EliminarPedido;
