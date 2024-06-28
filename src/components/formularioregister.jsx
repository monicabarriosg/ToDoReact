import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function FormularioRegistro() {
  const [user, setUser] = useState("");
  const [contrasena, setContrasena] = useState("");

  const postdatos = () => {
    if (user !== "" && contrasena !== "") {
      const userDatos = {
        nombre: user,
        contrasena: contrasena,
      };
      axios.post("http://localhost:3001/user", userDatos)
        .then(response => {
          console.log("Usuario registrado", response);
        })
        .catch(error => {
          console.error("Hubo un error al registrar el usuario", error);
        });
    }
  };

  return (
    <div className="container">
      <h1>Registro</h1>
      <input id='user' name="myInput" placeholder='Ingrese nombre' value={user} onChange={e => setUser(e.target.value)} className="myInput" />
      <input id='contrasena' name="myInput" placeholder='Ingrese contraseña' type="password" value={contrasena} onChange={e => setContrasena(e.target.value)}className="myInput"  />
      <button id='boton' onClick={postdatos} className="button">Registro</button>
      <button id='boton' className="button">
        <Link to='/login'>Ir al Login</Link>
      </button>
      <h1></h1>
    </div>
  );
}

export default FormularioRegistro;
