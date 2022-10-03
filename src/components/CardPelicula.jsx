import { Card } from "react-bootstrap";


const CardPelicula = () => {
  return (
    <Card className="cardPelicula mx-2 my-3">
      <Card.Header className="bg-morado text-light">
        <Card.Title>Green Book</Card.Title>
        <Card.Subtitle>Drama</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>
        Año 1962. Tony Lip (Viggo Mortensen) es un rudo italoamericano del Bronx que es contratado como chófer del virtuoso pianista negro Don Shirley (Mahershala Ali).
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardPelicula;
