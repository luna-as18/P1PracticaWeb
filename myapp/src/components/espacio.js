import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Espacio(props) {

  const imagenCasa = "/imagenCasa.png";
  const imagenApto = "/imagenApto.png";
    
    return (
      <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
        <Card.Body>
        <Link to={`/espacios/${props.espacio.id}`}>
        <Card.Img style={{ height: '14rem' }}  variant="top" src={props.espacio.type === 'house' ? imagenCasa : props.espacio.type === 'loft' ? imagenApto : ''} />
        </Link>
          <Card.Title>{props.espacio.name}</Card.Title>
          <Card.Text>
            {props.espacio.address}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default Espacio;
