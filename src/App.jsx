import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaggRegister from "./pages/PaggRegister"
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Contact from "./components/contact";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path='/register' element={<PaggRegister />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path="/contact" element ={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
