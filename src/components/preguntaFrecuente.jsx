
import { Link } from 'react-router-dom';
import '../css/preguntasFrecuentes.css'; // Archivo de estilos CSS
const PreguntaFrecuente = () => {
  return (
    <div className="pregunta-container">
      <h2 className="pregunta-title">Preguntas</h2>

      <div className="pregunta-item">
        <input type="checkbox" id="pregunta-item-1" className="pregunta-item-toggle" />
        <label htmlFor="pregunta-item-1" className="pregunta-item-question">
          ¿Cómo puedo realizar una devolución?
        </label>
        <div className="pregunta-item-answer">
          <p>
            Puedes realizar una devolución siguiendo estos pasos:...
          </p>
          <li>
            escribe un correo en el apartado de contactame para saber mas del problema que presentaste 
          </li>
        </div>
      </div>

      <div className="pregunta-item">
        <input type="checkbox" id="pregunta-item-2" className="pregunta-item-toggle" />
        <label htmlFor="pregunta-item-2" className="pregunta-item-question">
          ¿Cuál es el tiempo de entrega de los pedidos?
        </label>
        <div className="pregunta-item-answer">
          <p>
            El tiempo de entrega varía según la ubicación y el método de envío...
          </p>
          <li>Si sus productos son mas de 5, su pedido tardara minimo una semana en llegar</li>
          <li>si su pedido, incluye productos de la nueva coleccion este tardara en llegar 5 dias </li>
          <li>si usted hizo una compra hace 20 dias y su pedido aun no llega porfavor entrar al apartado de contactame y hazlo saber a nuestras oficinas </li>
        </div>
      </div>

    </div>
  );
};

export default PreguntaFrecuente;
