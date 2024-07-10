// este componente es para el apartado de preguntas frecuentes
// importacion de la hoja de estilos
import "../css/preguntasFrecuentes.css";
// contante que va a contener todas las preguntas frecuentes que un suario pueda tener
const PreguntaFrecuente = () => {
  return (
    <div className="pregunta-container">
      <h2 className="pregunta-title">Consultas frecuentes</h2>
      {/* pregunta numero 1 */}
      <div className="pregunta-item">
        <input
          type="checkbox"
          id="pregunta-item-1"
          className="pregunta-item-toggle"
        />
        <label htmlFor="pregunta-item-1" className="pregunta-item-question">
          ¿Cómo puedo realizar una devolución?
        </label>
        <div className="pregunta-item-answer">
          <p>Puedes realizar una devolución siguiendo estos pasos:...</p>
          <li>
            escribe un correo en el apartado de contactame para saber mas del
            problema que presentaste
          </li>
        </div>
      </div>
      {/* pregunta  numero 2 */}
      <div className="pregunta-item">
        <input
          type="checkbox"
          id="pregunta-item-2"
          className="pregunta-item-toggle"
        />
        <label htmlFor="pregunta-item-2" className="pregunta-item-question">
          ¿Cuál es el tiempo de entrega de los pedidos?
        </label>
        <div className="pregunta-item-answer">
          <p>
            El tiempo de entrega varía según la ubicación y el método de
            envío...
          </p>
          <li>
            Si sus productos son mas de 5, su pedido tardara minimo una semana
            en llegar
          </li>
          <li>
            si su pedido, incluye productos de la nueva coleccion este tardara
            en llegar 5 dias{" "}
          </li>
          <li>
            si usted hizo una compra hace 20 dias y su pedido aun no llega
            porfavor entrar al apartado de contactame y hazlo saber a nuestras
            oficinas{" "}
          </li>
        </div>

        {/* Pregunta numero 3 */}
        <div className="pregunta-item">
          <br />
          <input
            type="checkbox"
            id="pregunta-item-3"
            className="pregunta-item-toggle"
          />
          <label htmlFor="pregunta-item-3" className="pregunta-item-question">
            ¿Cual es mi talla?
          </label>
          <div className="pregunta-item-answer">
            <p>
              la talla de las camisas va del del 2 al 5, sumando números de uno
              en uno para ampliar la talla, <br />
              el resto de partes de arriba parten de la 36 y cuentan de dos en
              dos con cada talla.
            </p>
            <ul>
              <li>
                Si dejamos a un lado el corte oversize, la clave para encontrar
                tu talla <br />
                de ropa en las partes de arriba está en el hombro,
                independientemente de si son camisetas, polos, jerséis o
                camisas.
              </li>
              <li>
                Para empezar, deberás encontrar el punto de unión entre el hueso
                de la clavícula y del brazo. <br />
                Justo ahí deberá caer la costura que une el cuerpo de la prenda
                con la manga.
              </li>
              <li>
                En el caso de las camisas, abrocha también el botón del cuello.
                Al cerrarlo, este deberá rodear tu propio cuello <br />
                “abrazándolo” sutilmente, sin apretar demasiado ni quedar
                excesivamente holgado
              </li>
            </ul>
          </div>
        </div>

        {/* Pregunta numero 4 */}
        <div className="pregunta-item">
          <input
            type="checkbox"
            id="pregunta-item-4"
            className="pregunta-item-toggle"
          />
          <label htmlFor="pregunta-item-4" className="pregunta-item-question">
            Garantia de los productos
          </label>
          <div className="pregunta-item-answer">
            <p>
              Todos nuestros artículos siguen estrictos controles de calidad{" "}
              <br />
              para que los recibas y los disfrutes en las mejores condiciones.
            </p>
            <ul>
              <li>
                Pese a ello, si has recibido en tu pedido un artículo
                defectuoso, o si tras su uso, detectas una tara, <br />
                te sugerimos que contactes con nosotros o acudas a una tienda
                Zara para que podamos ayudarte.
              </li>
              <li>
                Si el artículo lo has comprado en una tienda física, por favor,
                acude a una de nuestras tiendas para que nuestro personal pueda
                valorarlo.
              </li>
            </ul>
          </div>
        </div>

        {/* Pregunta numero 5 */}
        <div className="pregunta-item">
          <input
            type="checkbox"
            id="pregunta-item-5"
            className="pregunta-item-toggle"
          />
          <label htmlFor="pregunta-item-5" className="pregunta-item-question">
            Disponibilidad de productos
          </label>
          <div className="pregunta-item-answer">
            <p>
              Aquí encontrarás información acerca de la disponibilidad de
              nuestros artículos, tanto online como en nuestras tiendas. <br />
              ¡Recibimos novedades cada semana!
            </p>
            <ul>
              <li>
                Te sugerimos que revises nuestra web para estar al tanto de
                todas las novedades y la disponibilidad de nuestros artículos.
              </li>
              <li>
                Si la talla del artículo que te interesa está agotada, pero
                tiene la opción Coming soon, puedes facilitarnos tu email <br />
                y te avisaremos si vuelve a estar disponible en los próximos 15
                días. Si en ese plazo no se repone, esa suscripción caduca y
                tendrías que volver a registrarla. Este proceso no equivale a
                una reserva.
              </li>
            </ul>
          </div>
        </div>

        {/* Pregunta 6 */}
        <div className="pregunta-item">
          <input
            type="checkbox"
            id="pregunta-item-6"
            className="pregunta-item-toggle"
          />
          <label htmlFor="pregunta-item-6" className="pregunta-item-question">
            Devoluciones
          </label>
          <div className="pregunta-item-answer">
            <p>
              Si la compra realizada no ha cumplido con tus expectativas, te
              ofrecemos la posibilidad de hacer una devolución.
            </p>
            <ul>
              <li>
                Debes gestionar la devolución dentro del plazo establecido:
                Compra online: tienes 30 días desde la fecha de envío de tu
                pedido. Compra en una tienda física: tienes 30 días desde la
                fecha de compra.
              </li>
              <li>
                Los artículos tienen que estar en su estado original y conservar
                todas las etiquetas. Tienes que hacer la devolución en el mismo
                mercado/región en el que has realizado la compra.
              </li>
            </ul>
          </div>
        </div>

        {/**/}
      </div>
    </div>
  );
};

export default PreguntaFrecuente;
