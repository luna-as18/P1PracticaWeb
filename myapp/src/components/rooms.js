import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import Room from "./room";

export default function Rooms() {
  const params = useParams();
  const [espacioDetails, setEspacioDetails] = useState(null);

  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
    fetch(URL)
      .then((data) => data.json()).then((data) => {
        const filteredRooms = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].homeId === params.espacioId) {
            filteredRooms.push(data[i]);
          }
        }
        setEspacioDetails(filteredRooms);
      });
  }, [params.espacioId]);

  if (!espacioDetails) {
    return <div><FormattedMessage id="Loading..."/></div>;
  }

  return (
    <div className="container">
      <h1><FormattedMessage id="My Rooms"/></h1>
      <hr />
      <Row>
        {espacioDetails.map(room => (
          <Col key={`${room.homeId}-${room.name}`}>
            <Room room={room} />
          </Col>
        ))}
      </Row>
    </div>
  );
}


