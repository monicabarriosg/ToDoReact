import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'

function carrusel() {
  return (
    <div className='carrusel'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
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
          className="d-block w-100"
          src="https://img2.rtve.es/i/?w=1600&i=1474205948441.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.wixstatic.com/media/e6e6d1_ee478d74ae5d473d83d2cf8a1ba0a553~mv2.jpg/v1/fill/w_1110,h_740,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e6e6d1_ee478d74ae5d473d83d2cf8a1ba0a553~mv2.jpg " 
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
  
}


export default carrusel