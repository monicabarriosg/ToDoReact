// este componente lo que hace es mostrar un carrusel en la pag deseada
// importacion de los elementos de bootstrap
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
// importacion de la hoja de estilo
import "../css/App.css";

function carrusel() {
  return (
    <div className="carrusel">
      <Carousel data-bs-theme="dark">
        {/* primera diapositiva de imagen mostrada en el carrusel */}
        <Carousel.Item>
          <img
            id="uno"
            className="d-block w-100 custom-img"
          
            src="https://static.bershka.net/4/static/images/home/2024/slidesHTML/_sales-ss/assets/launch_second-stage_bskteen_D.jpg?20240710021707"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Dile hola al estilo</h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* segunda diapositiva de imagen mostrada en el carrusel */}
        <Carousel.Item>
          <img
            id="dos"
            className="d-block w-100 custom-img"
            src="https://media.gucci.com/content/HeroRegularStandard_1600x675/1717749049/HeroRegularStandard_Gucci-Men-May24-1622-GUC-047-0019-G-v4_001_Default.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* tercera diapositiva de imagen mostrada en el carrusel */}
        <Carousel.Item>
          <img
            id="tres"
            className="d-block w-100 custom-img"
            src="https://media.gucci.com/content/HeroRegularStandard_1600x675/1713514521/HeroRegularStandard_Gucci-Lido-Apr24-ASE-240207-0009-6403_001_Default.jpg"
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        {/* cuarta diapositiva de imagen mostrada en el carrusel */}
        <Carousel.Item>
          <img
            id="uno"
            className="d-block w-100 custom-img"
            src="https://media.gucci.com/content/HeroRegularStandard_1600x675/1713514527/HeroRegularStandard_Gucci-Lido-Apr24-ASE-240214-0017-4747_001_Default.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>HI STYLE</h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* quinta diapositiva de imagen mostrada en el carrusel */}
        <Carousel.Item>
          <img
            id="uno"
            className="d-block w-100 custom-img"
            src="https://media.gucci.com/content/HeroRegularStandard_1600x675/1717416106/HeroRegularStandard_Gucci-KIDS-FW24-May24-240327-LB11-133_001_Default.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>HI STYLE</h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="uno"
            className="d-block w-100 custom-img"
            src="https://static.bershka.net/4/static/images/home/2024/slidesHTML/_sales-ss/assets/launch_first-stage_man_D.jpg?20240628101700"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>HI STYLE</h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default carrusel;
