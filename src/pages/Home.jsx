

import Carrusel from '../components/Carrusel';
import Cardm from '../components/Cardm';
import "../css/App.css"
function Home() {
    return (
      <div>
    
        <h1 className='elegant-tex'>¡Bienvenido! 
        <h3>
          <Carrusel/>
        </h3>
       <Cardm/>
        </h1>
      </div>
    );
  }
  
  export default Home;
  