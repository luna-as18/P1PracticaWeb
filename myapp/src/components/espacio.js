import Card from 'react-bootstrap/Card';

function Espacio(props) {
    // Aquí puedes agregar condiciones para renderizado condicional si es necesario
    
    return (
      <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
        <Card.Body>
          <Card.Title>Name: {props.name}</Card.Title>
          <Card.Text>
            Address: {props.address}
            <br />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default Espacio;
