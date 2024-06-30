
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cardm() {
  const videoUrl = 'https://static.bershka.net/4/photos2/2024/I/0/1/p/6250/033/251//01/6250033251_4_3_1.mp4?t=1718274273045';

  return (
    <Card style={{ width: '18rem' }}>
      <video width="100%" height="180" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the  content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export default Cardm;