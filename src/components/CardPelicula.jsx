import { Card } from "react-bootstrap";

const CardPelicula = ({ pelicula }) => {
  return (
    <Card className="cardPelicula mx-2 my-3">
      <Card.Header className="bg-morado text-light">
        <Card.Title>{pelicula.titulo}</Card.Title>
        <Card.Subtitle>{pelicula.genero}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>{pelicula.descripcion}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardPelicula;
