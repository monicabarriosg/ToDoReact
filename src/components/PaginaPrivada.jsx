// import React from "react";
import { Navigate } from "react-router-dom";

const PaginaPrivada = ({ children }) => { // funcion que va a validar si usuario de localStorage existe
    const usuario = localStorage.getItem("token")
    if (!usuario) {
        // si es diferente, osea, si no existe te dirige a error
        return <Navigate to={"/*"}/>
    }
    return children
};
export default PaginaPrivada