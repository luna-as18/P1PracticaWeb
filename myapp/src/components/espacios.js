import Espacio from "./espacio";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from "react-intl";
const { useEffect, useState } = require("react");

function Espacios() {
  const [espacios, setEspacios] = useState([]);

  useEffect(() => {
    const URL = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
    fetch(URL)
      .then(data => data.json())
      .then(data => {
        setEspacios(data);
      });
  }, []);

  return (
    <div className="container">
      <h1><FormattedMessage id="My Spaces"/></h1>
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
