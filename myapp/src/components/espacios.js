import Espacio from "./espacio";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const { useEffect, useState } = require("react");

function Espacios() {
  const [espacios, setEspacios] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
        // Si el usuario está offline, intenta recuperar datos de localStorage
        if (localStorage.getItem("espacios") === null) {
            // Si no hay datos almacenados en localStorage, establece un estado de "Cargando..."
            setEspacios("Loading...");
        } else {
            // Si hay datos almacenados en localStorage, recupéralos y actualiza el estado
            setEspacios(JSON.parse(localStorage.getItem("espacios")));
        }
    } else {
        // Si el usuario está online, realiza una solicitud HTTP para obtener los datos
        const URL = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                // Actualiza el estado con los datos de los espacios
                setEspacios(data);
                // Almacena los datos de los espacios en localStorage para futuras visitas offline
                localStorage.setItem("espacios", JSON.stringify(data));
            })
            .catch(error => console.error("Error al recuperar los espacios:", error));
    }
}, []);


  return (
    <div className="container">
      <h1>My Spaces</h1>
      <hr />
      <Row>
        {espacios.map(espacio => (
          <Col key={espacio.id}>
            <Espacio espacio={espacio} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Espacios;
