import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import Room from "./room";

export default function Rooms() {
  const params = useParams();
  const [espacioDetails, setEspacioDetails] = useState(null);

useEffect(() => {
    if (!navigator.onLine) {
        // Si el usuario está offline, intenta recuperar datos de localStorage
        if (localStorage.getItem("espacioDetails") === null) {
            // Si no hay datos almacenados en localStorage, establece un estado de "Cargando..."
            setEspacioDetails("Loading...");
        } else {
            // Si hay datos almacenados en localStorage, recupéralos y actualiza el estado
            setEspacioDetails(JSON.parse(localStorage.getItem("espacioDetails")));
        }
    } else {
        // Si el usuario está online, realiza una solicitud HTTP para obtener los datos
        const URL = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                // Filtra los datos para encontrar las habitaciones correspondientes al espacioId proporcionado
                const filteredRooms = data.filter(room => room.homeId === params.espacioId);
                // Actualiza el estado con los detalles del espacio
                setEspacioDetails(filteredRooms);
                // Almacena los detalles del espacio en localStorage para futuras visitas offline
                localStorage.setItem("espacioDetails", JSON.stringify(filteredRooms));
            })
            .catch(error => console.error("Error al recuperar los detalles del espacio:", error));
    }
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


