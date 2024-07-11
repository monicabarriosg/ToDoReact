import "bootstrap/dist/css/bootstrap.min.css";
import  { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const AboutUsModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sobre nosotros
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuestra mision</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>




En Monic, nos dedicamos a ofrecer moda contemporánea que inspire confianza y estilo en cada paso que das. <br />
 Nos esforzamos por proporcionar prendas de alta calidad que no solo realcen tu apariencia, <br />
  sino que también reflejen tu individualidad. Con un compromiso absoluto hacia la sostenibilidad <br />
 y la innovación en el diseño, estamos aquí para vestirte de manera que te empodere y te haga brillar en cada ocasión.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AboutUsModal;
