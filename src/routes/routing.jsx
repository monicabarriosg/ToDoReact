// cuerpo de toda la pagina
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaggRegister from "../pages/PaggRegister";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Contact from "../components/contact";
import Admi from "../pages/Admi";
import PreguntaFrecuente from "../components/preguntaFrecuente";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<PaggRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/PreguntaFrecuente" element={<PreguntaFrecuente />} />
        <Route path="/Admi" element={<Admi />} />
      </Routes>
    </Router>
  );
}

export default App;

// // rutas de toda la pagina
// import { Routes,Route } from "react-router-dom";
// import Register from "../pages/PaggRegister";
// import Login from "../pages/Login";
// import Home from "../pages/Home"
// import PreguntaFrecuente from "../components/preguntaFrecuente";
// import Admi from '../pages/Admi'

// function routing() {
//   return (
//     <div>
//             <Routes>
//                <Route path="/Admi" element={<Admi/>} />
//                 <Route path='/register' element={<Register />} />
//                 <Route path='/login' element={<Login />} />
//                 <Route path='/' element={<Home/>} />
//                 <Route path='/PreguntaFrecuente' element={<PreguntaFrecuente/>} />

//             </Routes>
//     </div>
//   )
// }
// export default routing
