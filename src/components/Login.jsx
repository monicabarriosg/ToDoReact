// import del useState y useEffect para los cambios de las variables 
import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
// funcion para declarar los cambios en las variables 
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
        Swal.fire("Usuarios registrados")//AQUI HAY UN SWEET ALERT
        console.log("Usuarios registrados", response.data);
      })
      .catch(error => {
        Swal.fire("Hubo un error al obtener los datos")//AQUI HAY UN SWEET ALERT
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
        Swal.fire("Usuario logueado")//AQUI HAY UN SWEET ALERT
        // alert("Usuario logueado");//AQUI HAY UN ALERT
        localStorage.setItem("token","clave")
        navigate('/home');
      } else {
        Swal.fire("Usuario o contraseña incorrectos")//AQUI HAY UN SWEET ALERT
        // alert("Usuario o contraseña incorrectos");//AQUI HAY UN ALERT
      }
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <input id='user'name="myInput"placeholder='Ingrese nombre'value={user} onChange={e => setUser(e.target.value)} required/>
      <input id='contrasena'name="myInput"placeholder='Ingrese contraseña'type="password"value={contrasena}onChange={e => setContrasena(e.target.value)}/>
      <button id='boton' onClick={getdatos}>Login</button>
      <button id='boton'>
        <Link to='/register'>Ir a Register</Link>
      </button>
      <h1></h1>
    </div>
  );
}
export default Formulariologin;