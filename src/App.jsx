import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaggRegister from "./pages/PaggRegister"
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Contact from "./components/contact";
import ProductosMujer from "./pages/ProductosMujer"


function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
   
        <Route path='/register' element={<PaggRegister />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path="/contact" element ={<Contact/>} />
        <Route path='/ProductosMujer' element={<ProductosMujer />} />
      </Routes>

    </Router>
  );
}

export default App;
