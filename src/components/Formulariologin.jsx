import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/login.css"


function Formulariologin() {
  const [user, setUser] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [datos, setDatos] = useState([]);
  const [,setUserFound] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3001/user")
      .then(response => {
        setDatos(response.data);
        console.log("Usuarios registrados", response.data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los datos", error);
      });
  }, []);
  const getdatos = (e) => {
    e.preventDefault();
    if (user !== "" && contrasena !== "") {
      let found = false;
      datos.forEach(dato => {
        if (dato.nombre === user && dato.contrasena === contrasena) {
          found = true;
        }
      });
      setUserFound(found);
      if (found) {
        alert("Usuario logueado");
        navigate('/home');
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    }
  };
  return (
    <div className="container">
      <h1>Crear cuenta</h1>
      <input id='user'name="myInput"placeholder='Ingrese nombre'value={user} onChange={e => setUser(e.target.value)} className="myInput"/>
      <input id='contrasena'name="myInput"placeholder='Ingrese contraseña'type="password"value={contrasena}onChange={e => setContrasena(e.target.value)} className="myInput"/>
      <button id='boton' onClick={getdatos} className="button">Login</button>
      <button id='boton' className="button ">
        <Link to='/register'>Ir a Register</Link>
      </button>
  
    </div>
  );
}
export default Formulariologin;





