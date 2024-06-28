import { Routes,Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home"
function routing() {
  return (
    <div>
            <Routes>
               
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home/>} />

            </Routes>
    </div>
  )
}
export default routing