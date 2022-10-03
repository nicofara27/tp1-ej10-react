import { Form, Button, Container } from "react-bootstrap";
import ListaPeliculas from "./ListaPeliculas";

const Formulario = () => {
  return (
    <Container className="my-4 mx-auto">
      <section>
        <h3 className="px-4 py-2 m-0 fw-semibold borde rounded-3 shadow">
          Completa los datos de la pelicula
        </h3>
        <Form className="bg-celeste p-4 fs-4 fw-semibold rounded-3 my-1 shadow">
          <Form.Group className="mb-3" controlId="formBasicTitulo">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre de la pelicula"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescripcion">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Ingresa la descripcion de la pelicula"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Género</Form.Label>
            <Form.Select className="mb-3" required>
              <option>Seleccione uno</option>
              <option value="1">Acción</option>
              <option value="2">Drama</option>
              <option value="3">Comedia</option>
              <option value="3">Terror</option>
            </Form.Select>
          </Form.Group>
          <div className="text-center ">
            <Button className="w-50 btn-morado" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </section>
      <h2 className="text-center display-4 text-decoration-underline mt-4">Lista peliculas</h2>
      <ListaPeliculas></ListaPeliculas>
    </Container>
  );
};

export default Formulario;
