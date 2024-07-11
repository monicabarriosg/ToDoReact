
import axios from 'axios';
import Swal from 'sweetalert2';

const EliminarPedido = ({ pedidoId, onPedidoEliminado }) => {
  const handleEliminarPedido = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/user/${pedidoId}`);
      if (response.status === 200) {
        onPedidoEliminado(pedidoId);
        Swal.fire("Pedido eliminado correctamente")//AQUI HAY UN SWEET ALERT
        // alert('Pedido eliminado correctamente');//AQUI HAY UN ALERT
      } else {
        Swal.fire("Hubo un problema al eliminar el pedido")//AQUI HAY UN SWEET ALERT
        // alert('Hubo un problema al eliminar el pedido');//AQUI HAY UN ALERT
      }
    } catch (error) {
      console.error('Error al eliminar pedido:', error);
      Swal.fire("Hubo un problema al eliminar el pedido",error)//AQUI HAY UN SWEET ALERT
      // alert('Hubo un problema al eliminar el pedido');//AQUI HAY UN ALERT
    }
  };

  return (
    <button onClick={handleEliminarPedido} className='button-delete'>Eliminar</button>
  );
};

export default EliminarPedido;
