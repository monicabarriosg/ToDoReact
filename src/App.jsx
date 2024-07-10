// // cuerpo de toda la pagina
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PaggRegister from "./pages/PaggRegister"
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import Navbar from './components/Navbar';
// import Contact from "./components/contact";
// import Admi from './pages/Admi'

// import PreguntaFrecuente from "./components/preguntaFrecuente";


// function App() {
//   return (
//     <Router>
//       <Navbar /> 
//       <Routes>
//         <Route path='/register' element={<PaggRegister />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/home' element={<Home />} />
//         <Route path="/contact" element ={<Contact/>} />
        
//         <Route path='/PreguntaFrecuente' element={<PreguntaFrecuente />} />
//         <Route path="/Admi" element={<Admi/>} />
//       </Routes>

//     </Router>
//   );
// }

// export default App;
//https://roadmap.sh/react



import Routing from "./routes/routing"
function App(){
  return(
    <div>
      <Routing/>
    </div>
  )
}
export default App