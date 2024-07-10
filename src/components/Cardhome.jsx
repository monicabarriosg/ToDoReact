// este componente tiene las fichas con los productos que se le van a presentar al usuario
// importacion de los elementos de bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
// importacion de la hoja de estilos
import "../css/CardHome.css";
// importacion de use navegate para la navegacion
import { useNavigate } from "react-router-dom";
// esta funcion lo que hace es que cuando se toca el boton se redirige al register
function cardHome() {
  let navegate = useNavigate;
  function navegar() {
    navegate("/register");
  }

  return (
    <Card style={{ width: "20rem" }} className="card-madre">
      {/* card numero 1 */}

      <Card.Img
        variant="top"
        className="card-1"
        src="https://static.bershka.net/4/photos2/2024/I/0/1/p/7804/033/251/94b5d18629d1a122c77329303c534f3a-7804033251_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium"
      />
      <Card.Body>
        <Card.Title> mujer</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary" onClick={navegar} href="productosMujer">
          ver
        </Button>
      </Card.Body>
      {/* card numero 2 */}
      <Card.Img
        style={{ width: "20rem" }}
        className="card-2"
        variant="top"
        src="https://static.bershka.net/4/photos2/2024/I/0/2/p/7999/443/800//13/f1aca70fcfbb889d542885d7084afd0e-7999443800_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium"
      />
      <Card.Body>
        <Card.Title>hombres</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary" onClick={navegar} href="productosMujer">
          ver
        </Button>
      </Card.Body>
      {/*card numero 3  */}
      <Card.Img
        variant="top"
        className="card-3"
        src="https://static.zara.net/assets/public/c182/fb9e/800d4396a640/749887b2c84f/04110680406-300-p/04110680406-300-p.jpg?ts=1712575796643&w=563"
      />
      <Card.Body>
        <Card.Title>niños</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">ver</Button>
      </Card.Body>
      {/*card numero 4  */}
      <Card.Img
        variant="top"
        className="card-4"
        src="https://static.zara.net/assets/public/3608/b85a/8b63402abfdc/c58bbdb1ac22/05350580707200-p/05350580707200-p.jpg?ts=1707741308716&w=563"
      />
      <Card.Body>
        <Card.Title>niña</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">ver</Button>
      </Card.Body>
    </Card>
  );
}

export default cardHome;
