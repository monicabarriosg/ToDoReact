import Modal from "../components/Modal";
// import PalabrasCarrusel from "../components/PalabrasCarrusel"
import VerProductos from "../components/VerProductos";

import Footer from "../components/Footer";
{
  /* importacion del componente que tiene el pie de pagina */
}
import Carrusel from "../components/Carrusel";

{
  /* importacion del carrusel */
}
import "../css/App.css";
{
  /* importacion de la hoja de estilos */
}
import VideoCard from "../components/video";

function Home() {
  return (
    <div>
      <h1 className="h1-tittle">
        Monica Wardrobe
        {/* Componente que contiene el carrusel */}
        <Carrusel />
      </h1>
      <h1>
        <Modal />
      </h1>

      <h1>
        {/* componte que tiene un video */}
        <VideoCard
          videoUrl="https://static.bershka.net/4/photos2/2024/I/0/1/p/7592/167/600//03/7592167600_4_3_1.mp4?t=1720100422889"
          title="nueva coleccion"
        />
      </h1>

      <VerProductos />

      <h1>
        {/* <PalabrasCarrusel items={items} /> */}
        {/* componente que tiene un video */}
        <VideoCard
          videoUrl="https://static.bershka.net/4/photos2/2024/I/0/1/p/6250/033/251//01/6250033251_4_3_1.mp4?t=1718274273045"
          title="nueva coleccion"
          className="video-uno"
        />
        <h1>
          {/* card sobre un producto */}
          {/* <CardHome /> */}
        </h1>
        {/* componte que tiene un video */}
        <VideoCard
          videoUrl="https://static.bershka.net/4/photos2/2024/I/0/1/p/2752/152/251//05/2752152251_4_3_1.mp4?t=1713442242737"
          title="nueva coleccion"
        />
      </h1>
      <h1>
        {/* componte que tiene un video */}
        <VideoCard
          videoUrl="https://static.bershka.net/4/photos2/2024/I/0/1/p/6060/220/746//14/6060220746_4_3_1.mp4?t=1718274338270"
          title="nueva coleccion"
        />
      </h1>

      <Footer />
    </div>
  );
}

export default Home;
