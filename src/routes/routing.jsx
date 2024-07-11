// cuerpo de toda la pagina
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaggRegister from "../pages/PaggRegister";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Contact from "../components/contact";
import Admi from "../pages/Admi";
import PreguntaFrecuente from "../components/preguntaFrecuente";
import { Modal } from "bootstrap";
import PaginaNoEncontrada from "../pages/PaginaNoEncontrada";
import PaginaPrivada from "../components/PaginaPrivada";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PaginaPrivada>
            <Navbar />
            <Home/>
          </PaginaPrivada>}/>
        <Route path="/*" element={<PaginaNoEncontrada />} />
        <Route path="/register" element={<PaggRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/modal" element={<Modal/>}/>
        <Route path="/PreguntaFrecuente" element={<PreguntaFrecuente />} />
        <Route path="/Admi" element={<Admi />} />
      </Routes>
    </Router>
  );
}

export default App;
