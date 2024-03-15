import Card from 'react-bootstrap/Card';

function Room(props) {

  const imagenRoom = "/imagenRoom.png";
  const imagenKitchen = "/imagenKitchen.png";
    
    return (
      <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
        <Card.Body>
        <Card.Title>{props.room.name}</Card.Title>
        <Card.Img style={{ height: '14rem' }}  variant="top" src={props.room.type === 'room' ? imagenRoom : props.room.type === 'kitcken' ? imagenKitchen : ''} />
        </Card.Body>
      </Card>
    );
  }
  
  export default Room;