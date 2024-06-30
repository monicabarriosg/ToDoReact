import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../css/App.css"

function carrusel() {
  return (
    <div className='carrusel'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
        id='uno'
          className="d-block w-100 custom-img"
          src="https://static.bershka.net/4/static/images/home/2024/slidesHTML/_sales-ss/assets/launch_first-stage_man_D.jpg?20240628101700"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>HI STYLE</h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        id='dos'
          className="d-block w-100 custom-img"
          src="https://media.gucci.com/content/HeroRegularStandard_1600x675/1717749049/HeroRegularStandard_Gucci-Men-May24-1622-GUC-047-0019-G-v4_001_Default.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        id='tres'
          className="d-block w-100 custom-img"
          src="https://media.gucci.com/content/HeroRegularStandard_1600x675/1713514521/HeroRegularStandard_Gucci-Lido-Apr24-ASE-240207-0009-6403_001_Default.jpg" 
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p>
       
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        id='uno'
          className="d-block w-100 custom-img"
          src="https://media.gucci.com/content/HeroRegularStandard_1600x675/1713514527/HeroRegularStandard_Gucci-Lido-Apr24-ASE-240214-0017-4747_001_Default.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>HI STYLE</h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        id='uno'
          className="d-block w-100 custom-img"
          src="https://media.gucci.com/content/HeroRegularStandard_1600x675/1717416106/HeroRegularStandard_Gucci-KIDS-FW24-May24-240327-LB11-133_001_Default.jpg"
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


export default carrusel