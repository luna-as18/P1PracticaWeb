import Card from 'react-bootstrap/Card';
import RoomDetail from './device';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

function Room(props) {

  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  const imagenRoom = "/imagenRoom.png";
  const imagenKitchen = "/imagenKitchen.png";
    
  return (
    <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
      <Card.Body>
        <Card.Title><FormattedMessage id={props.room.name}/></Card.Title>
        <img style={{ height: '14rem', cursor: 'pointer' }} src={props.room.type === 'room' ? imagenRoom : props.room.type === 'kitcken' ? imagenKitchen : ''} alt="" onClick={toggleDetail} />
        {showDetail && <RoomDetail devices={props.room.devices} />}
      </Card.Body>
    </Card>
  );
}
  
  export default Room;